const express = require("express");
const router = express.Router();
const axios = require("axios");
const instaDefaultLongTermToken = require("../util/insta");

let instaUserLoginInfo = {
  access_token: instaDefaultLongTermToken.token,
  token_type: "bearer",
  expires_in_five_days: instaDefaultLongTermToken.expiresInFiveDays, //token creation date + 55 days... insta token expires in 60 days
  is_expired: instaDefaultLongTermToken.isExpired, //token expires after 60 days... it has expired now
};

let returnObject = {};

const abridgeCaption = (caption) => {
  const trimCaption = caption.trim();
  if (trimCaption.length < 76) return trimCaption;
  if (trimCaption.length > 75) {
    const slicedCaption = trimCaption.slice(
      0,
      trimCaption.lastIndexOf(" ", 75)
    );
    return slicedCaption[slicedCaption.length - 1] === 75
      ? slicedCaption
      : `${slicedCaption}...`;
  }
}; // I restrict my caption here to no more than 75 characters; this is better than attempting this server-side with CSS, as CSS is finicky depending on a user's browser and browser version.

const getInstaInfo = () => {
  const url = `https://graph.instagram.com/me/media`;
  const fields =
    "?fields=media_url,permalink,caption,timestamp,media_type{IMAGE, CAROUSEL_ALBUM}, username, children{media_url,media_type{IMAGE, CAROUSEL_ALBUM}}"; // username,id,
  const accessToken = `&access_token=${instaUserLoginInfo.access_token}`;
  axios
    .get(`${url}${fields}${accessToken}`)
    .then((res) => {
      const data = res.data.data;
      if(data.length >= 5){
        returnObject.image = [];
        returnObject.userName = data[0].username;
        data.map((pic) => {
            const { media_url, caption, timestamp, permalink, children } = pic;
            returnObject.image.push({
              pic: media_type === "VIDEO" ? pic.thumbnail_url : media_url,
              caption: abridgeCaption(caption),
              date: timestamp.slice(5, 10) + "-" + timestamp.slice(0, 4),
              url: permalink,
              children: children.data || null,
            });
        });
      }
    })
    .catch((err) => {
      //console.log(getInstaError)
      returnObject = {}; // we don't want the expired info to remain, so we clear this variable
    });
};

const isTimeUp = () => {
  const refreshUrl = `https://graph.instagram.com/refresh_access_token`;
  const grantType = `grant_type=ig_refresh_token`;
  const accessToken = `access_token=${instaUserLoginInfo.access_token}`;
  axios
    .get(`${refreshUrl}?${grantType}&${accessToken}`)
    .then((res) => {
      const todayPlusFiftyFiveDays = new Date().getTime() + 4752000000; //token expires in 60 days...we try to renew after 55; must wait 24 hours after getting a new token before renewing again.
      const todayPlusSixtyDays = new Date().getTime() + 5184000000; // your query will return a expires_in field, but you need to convert it to milliseconds from seconds and add it to todays date...this is just easier
      const refreshedLoginInfo = res.data;
      instaUserLoginInfo = {
        access_token: refreshedLoginInfo.access_token,
        expires_in_five_days: todayPlusFiftyFiveDays,
        is_expired: todayPlusSixtyDays
      };
    })
    .catch((err) => {
      console.log(err);
    });
};

setInterval(() => {
  const todaysDate = new Date().getTime(); //today's date in milliseconds
  if (todaysDate < instaUserLoginInfo.is_expired) {
    getInstaInfo();
    if (
      todaysDate > instaUserLoginInfo.expires_in_five_days &&
      todaysDate < instaUserLoginInfo.is_expired
    ) {
      isTimeUp();
    }
  }
}, 21600000); // refreshes every 6 hours, or 4 times each day

getInstaInfo(); // generates list of images to pass to front-end app the moment the server is started

router.get("/", (req, res, next) => {
  if (returnObject !== {} && returnObject.image.length >= 5) {
    return res.json(returnObject);
  }
  throw err;
});

module.exports = router;
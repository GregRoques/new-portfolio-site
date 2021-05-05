const express = require("express");
const router = express.Router();
const axios = require("axios");
const fs = require('fs');
const instaJson = require("../util/instaToken.json");

let instaUserLoginInfo = {
  access_token: instaJson.access_token || "",
  token_type: instaJson.token_type || "",
  expires_in_five_days: instaJson.expires_in_five_days && !isNaN(instaJson.expires_in_five_days) ? Number(instaJson.expires_in_five_days) : 0,
  is_expired: instaJson.is_expired && !isNaN(instaJson.is_expired) ? Number(instaJson.is_expired) : 0
};

let returnObject = "";

const clearReturnObject = () => {
  returnObject = "";
};

const stopInstaInterval = () => {
  clearInterval(startInstaInterval);
};

const editChildren = (children) => {
  const childrenImages = [];
  children.map((child) => {
    if (child.media_type === "VIDEO") {
      childrenImages.push(child.thumbnail_url);
    }
    if (child.media_type === "IMAGE") {
      childrenImages.push(child.media_url);
    }
  });
  return childrenImages;
};

const editCaption = (caption) => {
  const trimCaption = caption.trim();
  if (trimCaption.length < 76) return trimCaption;
  if (trimCaption.length > 75) {
    const slicedCaption = trimCaption.slice(
      0,
      trimCaption.lastIndexOf(" ", 75)
    );
    return slicedCaption.length <= 75
      ? `${slicedCaption}...`
      : `${slicedCaption.slice(0, 75)}...`;
  }
}; // I restrict my caption here to no more than 75 characters; this is better than attempting this server-side with CSS, as CSS is finicky depending on a user's browser and browser version.

const getInstaInfo = () => {
  const url = `https://graph.instagram.com/me/media`;
  const fields =
    "?fields=media_url,permalink,caption,timestamp,media_type,thumbnail_url,username,children{media_url,media_type,thumbnail_url}";
  const instaCount = "&limit=5";
  const accessToken = `&access_token=${instaUserLoginInfo.access_token}`;
  axios.get(`${url}${fields}${instaCount}${accessToken}`)
    .then((res) => {
      const data = res.data.data;
      if (data.length >= 5) {
        returnObject = {};
        returnObject.image = [];
        returnObject.userName = data[0].username;
        data.map((pic) => {
          const {
            media_url,
            media_type,
            caption,
            timestamp,
            permalink,
            thumbnail_url,
            children,
          } = pic;
          returnObject.image.push({
            pic: media_type === "VIDEO" ? thumbnail_url : media_url,
            caption: editCaption(caption),
            date: timestamp.slice(5, 10) + "-" + timestamp.slice(0, 4),
            url: permalink,
            children: children ? editChildren(children.data) : null,
          });
        });
        return;
      }
      clearReturnObject();
    }).catch((err) => {
      const errorCode = err.response.data.error.code;
      if (errorCode === 190) {
        stopInstaInterval();
      }
      clearReturnObject(); // we don't want the expired info to remain, so we clear this variable
    });
};

const isTimeUp = () => {
  const refreshUrl = `https://graph.instagram.com/refresh_access_token`;
  const grantType = `grant_type=ig_refresh_token`;
  const accessToken = `access_token=${instaUserLoginInfo.access_token}`;
  axios
    .get(`${refreshUrl}?${grantType}&${accessToken}`)
    .then((res) => {
      const todayPlusFiftyFiveDays = new Date().setDate(new Date().getDate() + 55); //token expires in 60 days...we try to renew after 55; must wait 24 hours after getting a new token before renewing again.
      const todayPlusSixtyDays = new Date().setDate(new Date().getDate() + 60); // your query will return a expires_in field, but you need to convert it to milliseconds from seconds and add it to todays date...this is just easier
      const refreshedLoginInfo = res.data;
      const instaUserLoginInfo = {
        access_token: refreshedLoginInfo.access_token,
        token_type: refreshedLoginInfo.token_type,
        expires_in_five_days: todayPlusFiftyFiveDays,
        is_expired: todayPlusSixtyDays,
      };
      fs.writeFileSync("../util/instaToken.json", JSON.stringify(instaUserLoginInfo))
    })
    .catch((err) => {
      console.log(err);
    });
};

const startIntervalAction = function(){
  const { expires_in_five_days, is_expired } = instaUserLoginInfo;
  const todaysDate = new Date().getTime(); //today's date in milliseconds
  if (todaysDate > is_expired) {
    stopInstaInterval();
    clearReturnObject();
    return;
  }
  getInstaInfo();
  if (todaysDate > expires_in_five_days && todaysDate < is_expired) {
    isTimeUp();
  }
}

const startInstaInterval = setInterval(() => {
  startIntervalAction();
}, 21600000); // refreshes every 6 hours, or 4 times each day

startIntervalAction();

router.get("/", (req, res, next) => {
  if (returnObject) {
    return res.json(returnObject);
  }
  throw new Error("Error");
});

module.exports = router;
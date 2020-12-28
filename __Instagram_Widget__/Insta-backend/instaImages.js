const express = require("express");
const router = express.Router();
const axios = require("axios");
const instaDefaultLongTermToken = require('../util/insta');
const myKey = require("../util/sendgripApi");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

let instaUserLoginInfo = {
  access_token:  instaDefaultLongTermToken.token, 
  token_type: "bearer",
  expires_in: instaDefaultLongTermToken.expiration
};

let returnObject = {};
let fiveDayWarningCount = 0;

let isSentToday = false;

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: instaDefaultLongTermToken.sendgridApiKey,
    },
  })
); // you grab your sendGrip api key from the utils folder

const setSentTodayToTrue = () => {
  isSentToday = true;
  setTimeout(() => {
    isSentToday = false;
  }, 86400000); // sets to false in 24 hours...this is so you don't get more than one email each day.
}

const emailWarning = (message, err) => {
  const sendDate = new Date().toISOString().slice(0, 10);
  transporter
    .sendMail({
      to: "greg.roques@gmail.com",
      from: "greg@gregroques.com",
      subject: `${message}`,
      html: `<b>Date:</b> ${sendDate} <br/><br/>
          ${message} <br/><br/>
          <b>ERROR MESSAGE:</b> ${err}`,
    })
    .then(() => {
      setSentTodayToTrue();
    })
    .catch((err) => {
      console.log(`Could not send error email (emailWarning): ${err}`);
    });
};

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
    "?fields=media_url,permalink,caption,timestamp,media_type,children{media_url}"; // username,id,
  const accessToken = `&access_token=${instaUserLoginInfo.access_token}`;
  axios
    .get(`${url}${fields}${accessToken}`)
    .then((res) => {
      fiveDayWarningCount = 0;
      const data = res.data.data;
      returnObject.image = [];
      data.map((pic) => {
        if (pic.media_type !== "VIDEO") {
          const { media_url, caption, timestamp, permalink, children } = pic;
          returnObject.userName = "qtrmileatatime"
          returnObject.image.push({
            pic: media_url,
            caption: abridgeCaption(caption),
            date: timestamp.slice(5, 10) + "-" + timestamp.slice(0, 4),
            url: permalink,
            children: children ? children.data : null,
          });
        }
      });
    })
    .catch((err) => {
      const dayOfTheWeekNumeral = new Date().getDay(); //I don't usually check personal email on weekends, hence this.
      if (!isSentToday && dayOfTheWeekNumeral !== 6 && dayOfTheWeekNumeral !== 0) {
        const subject =
          "GregRoques.com: InstaGram Long Term Token has experienced an error or has expired.";
        emailWarning(subject, err);
        fiveDayWarningCount++
      }
      console.log(
        `getInstaInfo–Could not get media info from Instagram: ${err}`
      );
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
      //console.log(res.data)
      const todayPlusFiftyFiveDays = new Date().getTime() + 4752000000;
      const refreshedLoginInfo = res.data;
      instaUserLoginInfo = {
        access_token: refreshedLoginInfo.access_token,
        token_type: refreshedLoginInfo.token_type,
        expires_in: todayPlusFiftyFiveDays
      };
    })
    .catch((err) => {
    console.log(err)
    });
};

setInterval(() => {
  const todaysDate = new Date().getTime()
  if (fiveDayWarningCount < 6) {
    getInstaInfo();
  }
  if(todaysDate > instaUserLoginInfo.expires_in){
    isTimeUp()
  }
}, 21600000); // refreshes every 6 hours

getInstaInfo(); // generates list of images to pass to front-end app the moment the server is started

router.get("/", (req, res, next) => {
  if (returnObject !== {}) {
    res.json(returnObject);
  }
});

module.exports = router;

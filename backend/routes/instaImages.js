// const express = require("express");
// const router = express.Router();
// const instaRead = require('../util/insta');
// const myKey = require('../util/sendgripApi')
// const axios = require("axios");
// const nodemailer = require("nodemailer");
// const sendgridTransport = require("nodemailer-sendgrid-transport");

// const transporter = nodemailer.createTransport(
//   sendgridTransport({
//     auth: {
//       api_key: myKey,
//     },
//   })
// ); // You will want to store this in a utils folder, much like I did with my InstaKey

// let returnObject = {};

// let isSentToday = false; // make sure to only send warning emails once a day...more than that is annoying.

// let fiveDayWarningCount = 0; // I limit expiration email warnings to 5 weekdays...if I don't do anything after that, I clearly don't care anymore.

// const limitWarningsToFiveDays = () => {
//   const dayOfTheWeekNumeral = new Date().getDay();
//   if (dayOfTheWeekNumeral !== 6 && dayOfTheWeekNumeral !== 0) {
//     fiveDayWarningCount++;
//   } // I don't usually check personal mail on weekends, so this won't increment on Sat. or Sun.
// };

// const setSentTodayToTrue = () => {
//   isSentToday = true;
//   setTimeout(() => {
//     isSentToday = false;
//   }, 86400000); // sets to false in 24 hours...emails can resume again at that point.
// };

// const emailWarning = (message, err) => {
//   if (isSentToday === false) {
//     const sendDate = new Date().toISOString().slice(0, 10);
//     transporter
//       .sendMail({
//         to: "greg.roques@gmail.com",
//         from: "greg@gregroques.com",
//         subject: `${message}`,
//         html: `<b>Date:</b> ${sendDate} <br/><br/>
//             ${message} <br/><br/>
//             <b>ERROR MESSAGE:</b> ${err}`,
//       })
//       .then(() => {
//         setSentTodayToTrue();
//       })
//       .catch((err) => {
//         console.log(`Could not send error email (emailWarning): ${err}`);
//       });
//   }
// };

// const abridgeCaption = (caption) => {
//   const trimCaption = caption.trim();
//   if (trimCaption.length < 76) return trimCaption;
//   if (trimCaption.length > 75) {
//     const slicedCaption = trimCaption.slice(0, trimCaption.lastIndexOf(" ", 75));
//     return slicedCaption[slicedCaption.length - 1] === 75
//       ? slicedCaption
//       : `${slicedCaption}...`;
//   }
// }; // I restrict my caption here to no more than 75 characters; this is better than attempting this server-side with CSS, as CSS is finicky depending on a user's browser and browser version.

// const getInstaInfo = (instaToken) => {
//   const url = `https://graph.instagram.com/me/media`;
//   const fields =
//     "?fields=media_url,permalink,caption,timestamp,media_type,children{media_url}"; // username,id,
//   const accessToken = `&access_token=${instaToken}`;
//   axios
//     .get(`${url}${fields}${accessToken}`)
//     .then((res) => {
//       const data = res.data.data;
//       returnObject.image = [];
//       data.map((pic) => {
//         if (pic.media_type !== "VIDEO") {
//           const { media_url, caption, timestamp, permalink, children } = pic;
//           returnObject.image.push({
//             pic: media_url,
//             caption: abridgeCaption(caption),
//             date: timestamp.slice(5, 10) + "-" + timestamp.slice(0, 4),
//             url: permalink,
//             children: children ? children.data : null,
//           });
//         }
//       });
//     })
//     .catch((err) => {
//       if (isSentToday === false) {
//         const subject =
//           "GregRoques.com: InstaGram Long Term Token has experienced an error or has expired.";
//         emailWarning(subject, err);
//         limitWarningsToFiveDays();
//       }
//       console.log(`getInstaInfo–Could not get media info from Instagram: ${err}`);
//       returnObject = {}; // we don't want the expired info to remain, so we clear this variable
//     });
// };

// const isTimeUp = (expirationDate, myToken) => {
//   const days = 59; // Instagram token lasts 60 days, so I want to give myself a day advance but warning myself early.
//   let result = new Date(expirationDate); // converts the 'numeric time date' I input when my new token was created to a date format.
//   let today = new Date();
//   result.setDate(result.getDate() + days);
//   const numOfSeconds = result.getTime() - today.getTime();
//   const numOfDays = Math.round(
//     (Math.round(numOfSeconds) / (1000 * 3600 * 24)).toFixed(1)
//   );

//   if (numOfDays > 5) {
//     getInstaInfo(myToken);
//     fiveDayWarningCount = 0;
//     return;
//   }
//   if (numOfDays <= 5 && numOfDays >= 1 && isSentToday === false) {
//     const subject = "GregRoques.com: InstaGram Long Term Token expiring soon";
//     const when = `You Long Term Token will expire in approximately ${numOfDays} days. Renew it today!`;
//     emailWarning(subject, when);
//     getInstaInfo(myToken);
//     return;
//   }
//   if (numOfDays < 1 && isSentToday === false) {
//     const subject = "GregRoques.com: InstaGram Long Term Token HAS EXPIRED!!!";
//     const when = `You Long Term Token has expired. Renew it today!`;
//     emailWarning(subject, when);
//     limitWarningsToFiveDays();
//     return;
//   }
// };

// const getToken = () => { 
//   axios.get(instaRead)
//     .then(res=>{
//       const { longTermToken, lttDate, userName } = res.data;
//       returnObject.userName = userName;
//       isTimeUp(lttDate, longTermToken);
//     })
//     .catch((err) => {
//       console.log(`getToken–Could Not Get login Info From Firebase: ${err}`);
//     });
// };

// setInterval(() => {
//   if (fiveDayWarningCount < 6) {
//     getToken();
//   }
// }, 21600000); // refreshes every 6 hours

// getToken(); // gets token the second the server is booted or refreshed

// router.get("/", (req, res, next) => {
//   if (returnObject !== {}) {
//     res.json(returnObject);
//   }
// });

// module.exports = router;

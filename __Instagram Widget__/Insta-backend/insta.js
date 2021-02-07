const instaDefaultLongTermToken = {
    token: "YOUR INITIAL LONG TERM TOKEN GOES HERE",
    expiresInFiveDays: "YOUR TOKEN CREATION DATE PLUS 55 DAYS IN MILLISECONDS GOES HERE",
    isExpired: "YOUR TOKEN CREATION DATE PLUS 60 DAYS IN MILLISECONDS GOES HERE"
} 
module.exports = instaDefaultLongTermToken;

// ========= Get Long Term Token
// get your long term token from the "long term token generator" in your Facebook for Developers custom Instagram App
// long term tokens are good for 60 days, and can be refreshed every 24 hours

// ========= get date as milliseconds + 55 days
// to get new token expiration date + 55 days, use: "new Date().getTime() + 4752000000"
// to get new token expiration date + 60 days, use: "new Date().getTime() + 5184000000"



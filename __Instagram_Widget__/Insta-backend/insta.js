const instaDefaultLongTermToken = {
    token: "YOUR INITIAL LONG TERM TOKEN GOES HERE",
    expiration: "new Date().getTime() + 4752000000"
} 
module.exports = instaDefaultLongTermToken;

// ========= Get Long Term Token
// get your long term token from the "long term token generator" in your Facebook for Developers custom Instagram App
// long term tokens are good for 60 days, and can be refreshed every 24 hours

// ========= get date as milliseconds + 55 days
// to get new token expiration date + 55 days, use "new Date().getTime() + 4752000000"



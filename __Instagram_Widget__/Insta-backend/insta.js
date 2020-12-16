const instaDefaultLongTermToken = {
    token: "YOUR INITIAL LONG TERM TOKEN GOES HERE",
    expiration: "new Date(DATE TOKEN WAS CREATED GOES HERE).getTime() + 4752000000"
} 
module.exports = instaDefaultLongTermToken;

// get your long term token from the "long term token generator" in your Facebook for Developers custom Instagram App
// long term tokens are good for 60 days, and can be refreshed every 24 hours; 
// above, we set it to 55 days from the date the token was created; 
// this gives us some time to create a new token in the app if something goes wrong with the refresh
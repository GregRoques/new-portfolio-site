const instaDefaultLongTermToken = {
    token: "[YOUR_INITIAL_LONG_TERM_TOKEN]",
    expiration: '[GENERATE A "new Date().getTime()" FOR NEW TOKEN AND PASTE THE MILLISECOND DATE HERE] + 4752000000' 
} 

module.exports = instaDefaultLongTermToken;

// I get the DEFAULT ACCESS TOKEN from the "long token generator" in my custom-created Instagram app via Facebook for Developers
// expiration is date the token was created + 55 days, displayed in milliseconds
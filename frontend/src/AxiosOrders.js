import axios from 'axios';


// ====== Firebase blog
export const write = axios.create({
    baseURL: 'https://gregs-blog-1546d.firebaseio.com/users/'
});

export const instaWrite = axios.create({
    baseURL: `https://gregs-blog-1546d.firebaseio.com/insta_access/`
})

export const read = axios.create({
    baseURL: 'https://gregs-blog-1546d.firebaseio.com/.json?data/users/gEeFN514l1MWUQ9afBZxHFeEvyg2/'
});

// ====== Google Analytics
export const AuthURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB8VP9fq09ovmVwLpVlv1Z6RFCraNhYSgM';

export const trackingId = "UA-143112473-1";


// ====== Kanye Rest
export const kanye = axios.create({
    baseURL: 'https://api.kanye.rest'
})

export const fireCall = `https://gregs-blog-1546d.firebaseio.com/users/gEeFN514l1MWUQ9afBZxHFeEvyg2/.json?`;

// ====== InstaGram Access
export const instaBackend = "http://localhost:2000/instagramImages/";

//export const instaBackend = window.location.href.includes('www.') ? "https://www.gregroques.com/instagramImages/" : "https://gregroques.com/instagramImages/"



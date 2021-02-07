var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const photography = require("./routes/photography");
const linkedIn = require("./routes/linkedIn");
const insta = require("./routes/instaImages");

app.use(cors());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/backendPhotos", photography);
app.use("/linkedIn", linkedIn);
app.use("/instagramImages", insta)

const PORT = 2000;
app.listen(PORT, () => {
    console.log("Listening on ", PORT);
});
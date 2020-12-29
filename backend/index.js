var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const instaImages = require("./routes/instaImages");
const photography = require("./routes/photography");
const linkedIn = require("./routes/linkedIn");

app.use(cors());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/instagramImages", instaImages);
app.use("/backendPhotos", photography);
app.use("/linkedIn", linkedIn);

app.use(express.static(path.join(__dirname, "public")));
app.get("/*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 2000;
app.listen(PORT, () => {
    console.log("Listening on ", PORT);
});
const express = require("express");
const router = express.Router();
const { allRecs, WYATrecs } = require("./linkedInList");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

router.post("/", (req, res, next) => {
  const { sitePath } = req.body;
  const randRecs = sitePath === "WYAT" ? WYATrecs : allRecs;
  const whichRandRec = getRandomInt(randRecs.length);
  res.json(randRecs[whichRandRec]);
});

module.exports = router;

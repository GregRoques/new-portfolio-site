const express = require("express");
const router = express.Router();
const { allRecs } = require("../util/linkedInList");
const maxValue = allRecs.length;

function fixNum(randNum){
  if(randNum === maxValue - 1){
    return randNum -1 ;
  }else{
    return randNum +1 ;
  }
}

function getRandomInt(isEven) {
  let randNum = Math.floor(Math.random() * Math.floor(maxValue));
  if(isEven){
    if(randNum %2 === 0) return randNum
    return fixNum(randNum)
  }
  if(!isEven){
    if(randNum %2 !== 0) return randNum
    return fixNum(randNum)
  }
 }


router.post("/", (req, res) => {
  const type = req.body.type;
  const isTypeEven = type.toLowerCase() === 'even';
  const randInt = getRandomInt(isTypeEven),

  recommendations = allRecs[randInt]
  
  //console.log(recommendations)
  res.json(recommendations);

});

module.exports = router;

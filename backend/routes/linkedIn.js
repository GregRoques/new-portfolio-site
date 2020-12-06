const express = require("express");
const router = express.Router();
const { allRecs } = require("../util/linkedInList");
const maxValue = allRecs.length;

function fixNum(randNum){
  // console.log(randNum)
  if(randNum === maxValue){
    return randNum -1 ;
  }else{
    return randNum +1 ;
  }
}

function getRandomInt(isEven) {
  let randNum = Math.floor(Math.random() * Math.floor(maxValue));
  
  if(isEven){
    if(randNum %2 === 0){
      return randNum
    } else{
      return fixNum(randNum)
    }
  }
  if(!isEven){
    if(randNum %2 !== 0) return randNum
    return fixNum(randNum)
  }
 }


router.get("/", (req, res) => {
  randIntEven = getRandomInt(true),
  randIntOdd = getRandomInt(false)

  const recommendations = [
    allRecs[randIntEven],
    allRecs[randIntOdd]
  ]
  res.json(recommendations);

});

module.exports = router;

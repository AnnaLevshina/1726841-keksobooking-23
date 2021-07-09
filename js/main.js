function getRandom(minNumber, maxNumber, float){
   return Number.isInteger(minNumber) && Number.isInteger(maxNumber) ?

    getRandInt(minNumber, maxNumber):
    getRandFloat(minNumber, maxNumber, float);

}

function getRandInt(minNumber, maxNumber) {
  if(minNumber > maxNumber || maxNumber == minNumber || minNumber < 0 || maxNumber < 0) {
    throw new Error(`Error description`);
  }
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) ) + minNumber;
}

function getRandFloat(minNumber, maxNumber, float) {
  if(minNumber > maxNumber || maxNumber == minNumber || minNumber < 0 || maxNumber < 0) {
    throw new Error(`Error description`);
  }
  return Number((Math.random() * (maxNumber - minNumber + 1) + minNumber).toFixed(float));
}

console.log(getRandom( 1.83, 15.37, 5));

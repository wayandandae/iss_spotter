const { printPassTimes } = require("./index");
const { nextISSTimesForMyLocation } = require("./iss_promised");

nextISSTimesForMyLocation()
  .then(passTimes => {
    printPassTimes(passTimes);
  })
  // if then produces an error, catch it and print the error message
  .catch(error => {
    console.log("It didn't work: ", error.message);
  });
// asyncBreeds.js
const fs = require('fs');



const breedDetailsFromFile = function(breed, cbFunction) {
  // 2. function pulling data from exernal file
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
  
    // 3. once data is pulled, callback function is called
    if (!error) {
      cbFunction(data)
    } else {
      cbFunction(undefined)
    }
  });
};

// 4. callback function called and data from 'breedDetailsFromFile' function is printed.
const printBreedData = function (breed) {
  // console.log(breed)
}


// 1. call 'breedDetailsFromFile' function: takes in 'breed' and callbackFunction: printBreedData
const bombay = breedDetailsFromFile('Bombay', printBreedData);
// const balinese = breedDetailsFromFile('Balinese', printBreedData);

module.exports = breedDetailsFromFile

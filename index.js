// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error){
//     console.log('It did not work!', error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);

// });

// fetchCoordsByIP('154.5.170.97', (error, data) => {
//   if (error) {
//     console.log('Oopsie: ', error);
//     return;
//   }

//   console.log('Yeah buddy!: ', data);
// });

const exampleCoords = { latitude: '49.24750', longitude: '-123.12100' };


fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log('Oopsie: ', error);
    return;
  }

  console.log('Yeah buddy!: ', passTimes);
});
// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');

// const donut = function(error, ip)  {
//   if (error){
//     console.log('It did not work!', error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);

// }
// fetchMyIP(donut);

// fetchCoordsByIP('154.5.170.97', function(error, data)  {
//   if (error) {
//     console.log('Oopsie: ', error);
//     return;
//   }

//   console.log('Yeah buddy!: ', data);
// });

// const exampleCoords = { latitude: '49.24750', longitude: '-123.12100' };


// fetchISSFlyOverTimes(exampleCoords, function(error, passTimes)  {
//   if (error) {
//     console.log('Oopsie: ', error);
//     return;
//   }

//   console.log('Yeah buddy!: ', passTimes);
// });

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation(function(error, passTimes)  {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
  for (let time of passTimes){
    console.log(`Next pass at ${new Date(time.risetime)} for ${time.duration} seconds! `)
  }
});


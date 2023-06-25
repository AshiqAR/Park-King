// import React, { Component } from 'react';
// geolib = require('geolib');

const locs = [
    {
      latitude: 8.434534,
      longitude: 77.031217,
      title: 'jijis Parking Lot',
      subtitle: '20 slots available'
    },
    {
      latitude: 8.500730,
      longitude: 77.081300,
      title: 'happy Lots',
      subtitle: '5 slots available'
    },
    {
      latitude: 8.545050,
      longitude: 76.904207,
      title: 'Grand Plaza',
      subtitle: '2 slots available'
    },
    {
      latitude: 8.544838,
      longitude: 76.903519,
      title: 'Just Park It',
      subtitle: '3 slots available'
    },
    {
      latitude: 8.546529,
      longitude: 76.903799,
      title: 'Parkzee',
      subtitle: '1 slots available'
    },
    {
      latitude: 8.544326,
      longitude: 76.907457,
      title: 'Samrajyam',
      subtitle: '4 slots available'
    },
    {
      latitude: 8.541787,
      longitude: 76.907146,
      title: 'Vadakkans Parking',
      subtitle: '2 slots available'
    },
    {
      latitude: 8.543934,
      longitude: 76.896038,
      title: 'Kumarans Parking',
      subtitle: '3 slots available'
    },
    {
      latitude: 8.510346,
      longitude: 76.959055,
      title: 'Parking Plaza, Kowdiar',
      subtitle: '23 slots available'
    },
  ];


// const getRandomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min)) + min;
// };

// const generateLocations = () => {
//   const locations = [];
//   const numLocations = 30;
//   const minDistance = 1000; // Minimum distance in meters
//   const maxDistance = 10000; // Maximum distance in meters

//   const baseLatitude = 8.434534; // Base latitude
//   const baseLongitude = 77.031217; // Base longitude

//   for (let i = 0; i < numLocations; i++) {
//     let latitude, longitude;
//     let isValid = false;

//     while (!isValid) {
//       const latOffset = getRandomNumber(-1, 1) * (maxDistance / 111000); // Convert distance to latitude offset
//       const lonOffset = getRandomNumber(-1, 1) * (maxDistance / (111000 * Math.cos(baseLatitude))); // Convert distance to longitude offset

//       latitude = baseLatitude + latOffset;
//       longitude = baseLongitude + lonOffset;

//       isValid = true;
//       // Check if the generated location is within the desired range from existing locations
//       for (const loc of locations) {
//         const distance = geolib.getDistance(loc, { latitude, longitude });
//         if (distance < minDistance) {
//           isValid = false;
//           break;
//         }
//       }
//     }

//     // Add the generated location to the array
//     const location = {
//       latitude,
//       longitude,
//       title: `Location ${i + 1}`,
//       subtitle: `${getRandomNumber(1, 20)} lots available`
//     };
//     locations.push(location);
//   }

//   return locations;
// };

// // Usage
// const locations = generateLocations();
// console.log(locations);




export default locs;

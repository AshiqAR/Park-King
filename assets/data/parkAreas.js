// function getRandomFloat(min, max) {
//     return Math.random() * (max - min) + min;
// }

// function getRandomRating() {
//     return getRandomFloat(1, 5).toFixed(1);
// }

// const names = ["City Park", "Nature Reserve", "Urban Oasis", "Sky Garden", "Meadow Park", "Lakefront Park", "Sunset Valley", "Green Haven", "Botanical Gardens", "Pine Grove"];
// const places = ["City Center", "Suburb", "Downtown", "Riverside", "Mountain Ridge"];

// const parkAreas = [];

// for (let i = 0; i < 10; i++) {
//     const randomName = names[Math.floor(Math.random() * names.length)];
//     const randomPlace = places[Math.floor(Math.random() * places.length)];

//     const parkObject = {
//         name: randomName,
//         area_id: i + 1,
//         place: randomPlace,
//         no_free_slots: Math.floor(Math.random() * 50) + 1,
//         distance: getRandomFloat(1, 20).toFixed(2),
//         coords: {
//             latitude: getRandomFloat(-90, 90).toFixed(6),
//             longitude: getRandomFloat(-180, 180).toFixed(6),
//         },
//         average_rating: getRandomRating()
//     };

//     parkAreas.push(parkObject);
// }

const parkAreas = [
    {
        name: 'Lakefront Park',
        area_id: 1,
        place: 'Riverside',
        no_free_slots: 47,
        distance: '19.83',
        coords: { latitude: 9.1257316, longitude: 76.9038329 },
        average_rating: '2.7',
        price_per_hr: 20
    },
    {
        name: 'City Park',
        area_id: 2,
        place: 'Mountain Ridge',
        no_free_slots: 3,
        distance: '4.17',
        coords: { latitude: 9.222033, longitude: 76.744302 },
        average_rating: '1.1',
        price_per_hr: 20
    },
    {
        name: 'Green Haven',
        area_id: 3,
        place: 'City Center',
        no_free_slots: 24,
        distance: '6.54',
        coords: { latitude: 9.203298, longitude: 76.754382 },
        average_rating: '4.2',
        price_per_hr: 20
    },
    {
        name: 'Botanical Gardens',
        area_id: 4,
        place: 'Mountain Ridge',
        no_free_slots: 9,
        distance: '18.38',
        coords: { latitude: 8.434534, longitude: 77.031217 },
        average_rating: '2.8',
        price_per_hr: 20
    },
    {
        name: 'Sunset Valley',
        area_id: 5,
        place: 'Suburb',
        no_free_slots: 17,
        distance: '9.09',
        coords: { latitude: 8.500730, longitude: 77.081300 },
        average_rating: '4.8',
        price_per_hr: 20
    },
    {
        name: 'Urban Oasis',
        area_id: 6,
        place: 'Riverside',
        no_free_slots: 29,
        distance: '13.03',
        coords: { latitude: 8.545050, longitude: 76.904207 },
        average_rating: '4.9',
        price_per_hr: 20
    },
    {
        name: 'Urban Oasis',
        area_id: 7,
        place: 'Downtown',
        no_free_slots: 20,
        distance: '15.41',
        coords: { latitude: 8.544838, longitude: 76.903519 },
        average_rating: '4.2',
        price_per_hr: 20
    },
    {
        name: 'Meadow Park',
        area_id: 8,
        place: 'Downtown',
        no_free_slots: 11,
        distance: '5.62',
        coords: { latitude: 8.546529, longitude: 76.903799 },
        average_rating: '3.9',
        price_per_hr: 20
    },
    {
        name: 'Pine Grove',
        area_id: 9,
        place: 'Mountain Ridge',
        no_free_slots: 42,
        distance: '6.33',
        coords: { latitude: 8.544326, longitude: 76.907457 },
        average_rating: '3.3',
        price_per_hr: 20
    },
    {
        name: 'Botanical Gardens',
        area_id: 10,
        place: 'Suburb',
        no_free_slots: 22,
        distance: '16.96',
        coords: { latitude: 8.541787, longitude: 76.907146 },
        average_rating: '3.2',
        price_per_hr: 20
    }
]

export default parkAreas;

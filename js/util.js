import {AVATARS, TYPES, CHECKINS, CHECKOUTS, FEATURES, PHOTOS, SIMILAR_HOTELS_COUNT} from './data.js'

function getRandInt(minNumber, maxNumber) {
  if(minNumber > maxNumber || maxNumber === minNumber || minNumber < 0 || maxNumber < 0) {
    throw new Error('Error description');
  }
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) ) + minNumber;
}

function getRandFloat(minNumber, maxNumber, float) {
  if(minNumber > maxNumber || maxNumber === minNumber || minNumber < 0 || maxNumber < 0) {
    throw new Error('Error description');
  }
  return Number((Math.random() * (maxNumber - minNumber + 1) + minNumber).toFixed(float));
}

const getRandomArrayElement = (elements) => elements[getRandInt(0, elements.length - 1)];

const generateAuthor = () => ({
  avatar: getRandomArrayElement(AVATARS),
});

const generateOffer = () => ({
  title: 'Загадочный дом',
  address: '{{location.lat}}, {{location.lng}}',
  price: getRandInt(500, 35000),
  type: getRandomArrayElement(TYPES),
  rooms: getRandInt(1, 5),
  guests: getRandInt(1, 10),
  chechin: getRandomArrayElement(CHECKINS),
  chechout: getRandomArrayElement(CHECKOUTS),
  features: getRandomArrayElement(FEATURES),
  description: '',
  photos: getRandomArrayElement(PHOTOS),
});

const generateLocations = () => ({
  lat: getRandFloat(35.65000, 35.70000, 5),
  lng: getRandFloat(139.70000, 139.80000, 5),
});

const generateHotel = () => ({
  author: generateAuthor(),
  offer: generateOffer(),
  location: generateLocations(),
});

const similarHotels = new Array(SIMILAR_HOTELS_COUNT).fill(null).map(() => generateHotel());

console.log(similarHotels);
import './util.js';
/*import './generating-element-markup.js';*/
import './inactive-state.js';
import './user-form.js';
import './leaflet.js';

/*function getRandInt(minNumber, maxNumber) {
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

const AVATARS = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const SIMILAR_HOTELS_COUNT = 10;

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

console.log(similarHotels);*/

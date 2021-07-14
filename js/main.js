import * as _ from 'lodash';
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

/*console.log(getRandom( 1.83, 15.37, 5));
*/
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

const SIMILAR_HOTRLS_COUNT = 10;

const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

const author = () => {
  return {
    avatar: getRandomArrayElement(AVATARS),
  };
};

const offer = () => {


  return{
    title: "Загадочный дом",
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
  };
};

const locations = () => {

  return{

    lat: getRandFloat(35.65000, 35.70000, 5),
    lng: getRandFloat(139.70000, 139.80000),
  };
};

const similarHotels = new Array(SIMILAR_HOTRLS_COUNT).fill(null).map(() => author());
console.log(similarHotels());

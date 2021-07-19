import {similarHotels} from './util.js';

/*const userCard = document.querySelector('#card').content;
const userDialog = userCard.querySelector('.popup');*/

/*const similarTitleElement = userDialog.querySelector('.popup__title');
const similarAddressElement = userDialog.querySelector('.popup__text--address');
const similarPriceElement = userDialog.querySelector('.popup__text--price');
const similarTypeElement = userDialog.querySelector('.popup__type');
const similarCapacityElement = userDialog.querySelector('.popup__text--capacity');
const similarTimeElement = userDialog.querySelector('.popup__text--time');

const similarFeaturesElement = userDialog.querySelector('.popup__features');
*/
const TYPES_DICTIONARY = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const similarHotel = similarHotels;

const renderCard = (hotel) => {
  const card = document.querySelector('#card').content;
  const template = card.querySelector('.popup');

  const element = template.cloneNode(true);

  element.querySelector('.popup__title').textContent = hotel.offer.title;
  element.querySelector('.popup__text--address').textContent = hotel.offer.address;
  element.querySelector('.popup__text--price').textContent = `${hotel.offer.price  } ₽/ночь`;


  element.querySelector('.popup__type').textContent = TYPES_DICTIONARY[hotel.offer.type];
  element.querySelector('.popup__text--capacity').textContent = `${hotel.offer.rooms  } комнаты для ${  hotel.offer.guests  } гостей`;
  element.querySelector('.popup__text--time').textContent = `Заезд после ${  hotel.offer.checkin  }, выезд до ${  hotel.offer.checkout}`;

  const features = hotel.offer.features;
  const featureListElement = element.querySelector('.popup__features');

  if(features) {
    const featuresFragment = document.createDocumentFragment();

    features.forEach((feature) => {
      const featureElement = document.createElement('li');
      featureElement.classList.add('popup__feature', `popup__feature--${feature}`);
      featuresFragment.appendChild(featureElement);
    });
    featureListElement.textContent = '';
    featureListElement.appendChild(featuresFragment);
  } else {
    featureListElement.style.display = 'none';
  }

  element.querySelector('.popup__description').textContent = hotel.offer.description;

  const offerPhotos = hotel.offer.photos;
  const photosBlock = element.querySelector('.popup__photos');
  const newPhoto = card.querySelector('.popup__photo');
  const fragmentPhoto = document.createDocumentFragment();
  if (offerPhotos) {
    offerPhotos.forEach((photo) => {
      const elementPhoto = newPhoto.cloneNode(true);
      elementPhoto.src = photo;
      fragmentPhoto.appendChild(elementPhoto);
    });
    photosBlock.innerHTML = '';
    photosBlock.appendChild(fragmentPhoto);
  } else {
    photosBlock.style.display = 'none';
  }

  element.querySelector('.popup__avatar').src = hotel.author.avatar;
  return element;
};

const getCard = document.querySelector('#map-canvas').appendChild(renderCard(similarHotel[0]));

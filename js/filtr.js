import {data} from './data-fetch.js';

const WIFI = "wifi";
const DISHWASHER = "dishwasher";
const PARKING = "parking";
const WASHER = "parking";
const ELEVATOR = "elevator";
const CONDITIONER = "conditioner";

const tests = () => {
  const result = data.filter(datas => datas.offer.features.includes(DISHWASHER));

console.log(result);
};
document.querySelector('.map__checkbox').addEventListener('click', () => tests());

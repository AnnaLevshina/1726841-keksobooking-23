import {getData} from './data-fetch.js';
import {renderCard} from './generating-element-markup.js';


const map = L.map('map-canvas')
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

/*const mainPingIco = L.icon({
    iconUrl: 'img/marker-icon.png',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
});
*/
const marker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
  },
);
marker.addTo(map);

marker.on('moveend', (evt) => {
  const addressInput = document.querySelector('#address');

  addressInput.setAttribute('value', evt.target.getLatLng());
  addressInput.setAttribute('readonly', 'readonly');
});

// const points = [
//   {
//     title: 'Футунара',
//     lat: 35.687976,
//     lng: 139.71674,
//   },
//   {
//     title: 'Шеэри',
//     lat: 35.685671,
//     lng: 139.720339,
//   },
//   {
//     title: 'Робен',
//     lat: 35.690938,
//     lng: 139.705287,
//   },
//   {
//     title: 'Ginza',
//     lat: 35.691356,
//     lng: 139.70747,
//   },
// ];

// points.forEach(({lat, lng}) => {
//   const marker = L.marker({
//     lat,
//     lng,
//   });

//   marker.addTo(map);
// });

// points.forEach(({lat, lng, title}) => {
//   const icon = L.icon({
//     iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
//     iconSize: [40, 40],
//     iconAnchor: [20, 40],
//   });

//   const marker = L.marker(
//     {
//       lat,
//       lng,
//     },
//     {
//       icon,
//     },
//   );

//   marker
//     .addTo(map)
//     .bindPopup(title);
// });

getData().then((data) => {

  data.forEach((hotel) => {
    const { offer, location, author } = hotel;

    const icon = L.icon({
      iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      {
        lat: location.lat,
        lng: location.lng,
      },
      {
        icon,
      },
    );

    marker.addTo(map).bindPopup(renderCard(hotel));
  });

});
export {marker};

/*fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((hotel) => {
    console.log(hotel);
  });*/

let data = null;

const getData = () => new Promise(
  (resolve, reject) => {
    if (data) {
      resolve(data);
    } else {
      fetch('https://23.javascript.pages.academy/keksobooking/data')
        .then((response) => response.json())
        .then((response) => {
          data = response;
          return response;
        })
        .then(resolve)
        .catch(reject);
    }
  });

document.addEventListener('click', () => {
  getData().then(console.log);
});
export {getData, data};


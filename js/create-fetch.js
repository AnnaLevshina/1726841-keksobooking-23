const form = document.querySelector('.ad-form');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      credentials: 'same-origin',
      body: new FormData(form),
    },
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log('Error')
      }
    });
});

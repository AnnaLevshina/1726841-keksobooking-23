//Заголовок объявления
const MIN_PRICE_BUNGALOW = 0;
const MIN_PRICE_FLAT = 1000;
const MIN_PRICE_HOTEL = 3000;
const MIN_PRICE_HOUSE = 5000;
const MIN_PRICE_PALACE = 10000;
const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const MIN_PRICE_LENGTH = 0;
const MAX_PRICE_LENGTH = 7;
const TIME_12 = '12:00';
const TIME_13 = '13:00';
const TIME_14 = '14:00';


const userNameInput = document.querySelector('#title');

userNameInput.addEventListener('input', () => {
  const valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Ещё ${  MIN_NAME_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_NAME_LENGTH } симв.`);
  } else {
    userNameInput.setCustomValidity('');
  }

  userNameInput.reportValidity();
});

//Цена за ночь

const userPriceInput = document.querySelector('#price');

userPriceInput.addEventListener('input', () => {
  const valueLength = userPriceInput.value.length;

  if (valueLength < MIN_PRICE_LENGTH) {
    userPriceInput.setCustomValidity(`Ещё ${  MIN_PRICE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_PRICE_LENGTH) {
    userPriceInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_PRICE_LENGTH } симв.`);
  } else {
    userPriceInput.setCustomValidity('');
  }

  userPriceInput.reportValidity();
});

//Поле "Тип жилья" влияет на минимальное значение поля "Цена на ночь"

const userTypeInput = document.querySelector('#type');

const userSetMinPrice = (type) => {

  if (type === 'bungalow') {
    userPriceInput.placeholder = MIN_PRICE_BUNGALOW;
    userPriceInput.min = MIN_PRICE_BUNGALOW;
  } else if (type === 'flat') {
    userPriceInput.placeholder = MIN_PRICE_FLAT;
    userPriceInput.min = MIN_PRICE_FLAT;
  } else if (type === 'hotel') {
    userPriceInput.placeholder = MIN_PRICE_HOTEL;
    userPriceInput.min = MIN_PRICE_HOTEL;
  } else if (type === 'house') {
    userPriceInput.placeholder = MIN_PRICE_HOUSE;
    userPriceInput.min = MIN_PRICE_HOUSE;
  } else if (type === 'palace') {
    userPriceInput.placeholder = MIN_PRICE_PALACE;
    userPriceInput.min = MIN_PRICE_PALACE;
  }
};

userSetMinPrice(userTypeInput.value);

userTypeInput.addEventListener('change', (evt) => {
  userSetMinPrice(evt.target.value);
});

//Время заезда и  время выезда

const userTime = document.querySelector('#timein');
const userTimeOut = document.querySelector('#timeout');

const userTimeIn = (timein) => {

  if (timein === '12:00') {
    userTimeOut.value = TIME_13;
    userTimeOut.min = TIME_13;
  }else if (timein === '13:00') {
    userTimeOut.value = TIME_14;
    userTimeOut.min = TIME_14;
  }else if (timein === '14:00') {
    userTimeOut.value = TIME_12;
    userTimeOut.min = TIME_12;
  }
};

userTimeIn(userTime.value);
userTime.addEventListener('change', (evt) => {
  userTimeIn(evt.target.value);
});


// Количество кмнат синхронизировано с полем Количество мест

const userRoom = document.querySelector('#room_number');
const userCapacity = document.querySelector('#capacity');

const userRoomNumber = (room) => {
  userCapacity.querySelectorAll('option').forEach((option) => {
    const value = Number(option.value);

    if (room === 100) {
      option.disabled = value !== 0;
    } else {
      // если выбрано 1, 2 или 3 комнаты
      if (value === 0) {
        option.disabled = true;
      } else {
        option.disabled = value > room;
      }
    }
  });

  if (room === 100) {
    userCapacity.value = 0;
  } else {
    userCapacity.value = userCapacity.querySelectorAll('option:not(:disabled)')[0].value;
  }
};

userRoom.addEventListener('change', () => {
  userRoomNumber(Number(userRoom.value));
});

userRoomNumber(Number(userRoom.value));

//Заголовок объявления
const userNameInput = document.querySelector('#title');

const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;

/*userNameInput.addEventListener('invalid', () => {
	if  (userNameInput.validity.tooShort) {
		userNameInput.setCustomValidity('Заголовок должен состоять минимум из 30-ти символов');
	}else if (userNameInput.validity.tooLong){
		userNameInput.setCustomValidity('Заголовок не должен первышать 100 символов');
	}else if (userNameInput.validity.valueMissing){
		userNameInput.setCustomValidity('Обязательное поле');
	} else {
		userNameInput.setCustomValidity('');
	}
});*/

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

const MIN_PRICE_LENGTH = 0;
const MAX_PRICE_LENGTH = 7;

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

const MIN_PRICE_BUNGALOW = 0;
const MIN_PRICE_FLAT = 1000;
const MIN_PRICE_HOTEL = 3000;
const MIN_PRICE_HOUSE = 5000;
const MIN_PRICE_PALACE = 10000;

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
	userSetMinPrice(evt.target.value)
});
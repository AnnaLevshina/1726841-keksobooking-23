function inactive_state() {

const formElement =  document.querySelector('.ad-form');
formElement.classList.add('ad-form--disabled');

const mapFiltersElement =  document.querySelector('.map__filters');
mapFiltersElement.classList.add('ad-form--disabled');

const fieldsetFilters = document.querySelector('.notice');
const fieldsets =fieldsetFilters.querySelectorAll('fieldset');
for (let i =0, length = fieldsets.length; i < length; i++){
  fieldsets[i].setAttribute("disabled", "disabled");
};

const mapFilters = document.querySelector('.map__filters-container');
const mapFiltersSelect = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');

for (let i =0, length = mapFiltersSelect.length; i < length; i++){
  mapFiltersSelect[i].setAttribute("disabled", "disabled");
};

for (let i =0, length = mapFiltersFieldset.length; i < length; i++){
  mapFiltersFieldset[i].setAttribute("disabled", "disabled");
};

};

inactive_state();


function active_state() {

const formElement =  document.querySelector('.ad-form');
formElement.classList.remove('ad-form--disabled');

const mapFiltersElement =  document.querySelector('.map__filters');
mapFiltersElement.classList.remove('ad-form--disabled');

const fieldsetFilters = document.querySelector('.notice');
const fieldsets =fieldsetFilters.querySelectorAll('fieldset');
for (let i =0, length = fieldsets.length; i < length; i++){
  fieldsets[i].removeAttribute("disabled", "disabled");
};

const mapFilters = document.querySelector('.map__filters-container');
const mapFiltersSelect = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');

for (let i =0, length = mapFiltersSelect.length; i < length; i++){
  mapFiltersSelect[i].removeAttribute("disabled", "disabled");
};

for (let i =0, length = mapFiltersFieldset.length; i < length; i++){
  mapFiltersFieldset[i].removeAttribute("disabled", "disabled");
};

};

/*active_state();
*/

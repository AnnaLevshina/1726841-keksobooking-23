function deactivateForm() {

  const formElement =  document.querySelector('.ad-form');
  formElement.classList.add('ad-form--disabled');

  const mapFiltersElement =  document.querySelector('.map__filters');
  mapFiltersElement.classList.add('ad-form--disabled');

  const fieldsetFilters = document.querySelector('.notice');
  const fieldsets =fieldsetFilters.querySelectorAll('fieldset');
  for (let iii =0, length = fieldsets.length; iii < length; iii++){  //let i исправила на iii из-за того, что пишет Identifier name 'i' is too short (< 2)
    fieldsets[iii].setAttribute('disabled', 'disabled');
  }

  const mapFilters = document.querySelector('.map__filters-container');
  const mapFiltersSelect = mapFilters.querySelectorAll('select');
  const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');

  for (let iii =0, length = mapFiltersSelect.length; iii < length; iii++){
    mapFiltersSelect[iii].setAttribute('disabled', 'disabled');
  }

  for (let iii =0, length = mapFiltersFieldset.length; iii < length; iii++){
    mapFiltersFieldset[iii].setAttribute('disabled', 'disabled');
  }

}

deactivateForm();


function activateForm() {

  const formElement =  document.querySelector('.ad-form');
  formElement.classList.remove('ad-form--disabled');

  const mapFiltersElement =  document.querySelector('.map__filters');
  mapFiltersElement.classList.remove('ad-form--disabled');

  const fieldsetFilters = document.querySelector('.notice');
  const fieldsets =fieldsetFilters.querySelectorAll('fieldset');
  for (let iii =0, length = fieldsets.length; iii < length; iii++){
    fieldsets[iii].removeAttribute('disabled', 'disabled');
  }

  const mapFilters = document.querySelector('.map__filters-container');
  const mapFiltersSelect = mapFilters.querySelectorAll('select');
  const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');

  for (let iii =0, length = mapFiltersSelect.length; iii < length; iii++){
    mapFiltersSelect[iii].removeAttribute('disabled', 'disabled');
  }

  for (let iii =0, length = mapFiltersFieldset.length; iii < length; iii++){
    mapFiltersFieldset[iii].removeAttribute('disabled', 'disabled');
  }

}

/*activateForm();
*/

import throttle from 'lodash.throttle';

const KEY_STORAGE = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');

let formData = localStorage.getItem(KEY_STORAGE)
  ? JSON.parse(localStorage.getItem(KEY_STORAGE))
  : {};

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

fillingInputs();

function onFormInput(evt) {
  const { name, value } = evt.target;
  formData[name] = value;

  try {
    localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(KEY_STORAGE);
  formData = {};
}

function fillingInputs() {
  const dataArray = Object.entries(formData);

  if (dataArray.length === 0) {
    return;
  }

  dataArray.forEach(([name, value]) => {
    formEl.elements[name].value = value;
  });
}

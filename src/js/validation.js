const form = document.querySelector('#js-form');
const inputEmail = document.querySelector('#email');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const rgx = /\S+@\S+\.\S+/g;

  if (rgx.test(inputEmail.value)) {
    inputEmail.classList.remove('is-invalid');
    inputEmail.value = '';
  } else {
    inputEmail.classList.add('is-invalid');
  }
});

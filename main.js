const form = document.querySelector('.container__form');
const emailInput = document.querySelector('input[type="email"]');
const errorText = document.querySelector('.form_error-text');
const errorIcon = document.querySelector('.form__error-icon');

function checkEmail (event) {
  if(!emailInput.validity.valid) {
    event.preventDefault();
    errorText.innerText = "Please provide a valid email"
    errorIcon.style.display = "block";
    emailInput.style.borderColor = "#F96464";
    emailInput.focus();
    console.log('Function Working');
  }

}


form.addEventListener('submit', checkEmail);
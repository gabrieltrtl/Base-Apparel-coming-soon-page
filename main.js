const form = document.querySelector('.container__form');

function validateEmail(event) {
  
  const emailInput = document.getElementById('email');
  let emailError = document.querySelector('.form__error-text');
  let imgError = document.querySelector('.form__error-icon');
  const email = emailInput.value.trim();

  // Expressão regular para validar o formato do email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "" || !emailPattern.test(email)) {
    emailError.textContent = "Please provide a valid email";
    imgError.style.display = "block";
    emailInput.focus();
    event.preventDefault();
  } else {
    emailError.textContent = "";
    return true;
  }
}

form.addEventListener('submit', validateEmail);





/*
const form = document.querySelector('.container__form');
const emailInput = document.querySelector('input[type="email"]');
const errorText = document.querySelector('.form__error-text');
const errorIcon = document.querySelector('.form__error-icon');

function checkEmail (event) {
  if(!emailInput.validity.valid) {
    event.preventDefault();
    errorText.innerText = "Please provide a valid email"
    errorIcon.style.display = "block";
    emailInput.style.borderColor = "#F96464";
    emailInput.focus();
    event.preventDefault();
  }
};


form.addEventListener('submit', checkEmail);

*/
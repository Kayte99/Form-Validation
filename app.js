const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const firstErrorText = document.querySelector(".first-error-text");
const lastNameErrorText = document.querySelector(".last-error-text");
const emailErrorText= document.querySelector(".email-error-text");
const passwordErrorText = document.querySelector(".password-error-text");
const firstWarning = document.querySelector("#first-warning");
const lastWarning = document.querySelector("#last-warning")
const emailWarning = document.querySelector("#email-warning")
const passwordReveal = document.getElementById("password-reveal")


console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    firstErrorText.innerHTML = "First Name cannot be empty";
    firstWarning.style.display = "block"

    } else {
    firstName.classList.remove('error');
    firstErrorText.innerHTML = '';
    firstWarning.style.display = "none"
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    lastNameErrorText.innerHTML = "Last Name cannot be empty"
    lastWarning.style.display = "block"

  } else {
    lastName.classList.remove('error');
    lastNameErrorText.innerHTML = '';
    lastWarning.style.display = "none"
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    emailErrorText.innerHTML = "Please input an email";
    emailWarning.style.display = 'block'

  } else {
    email.classList.remove('error');
    emailErrorText.innerHTML = '';
    emailWarning.style.display = "none"
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    passwordErrorText.innerHTML = "Password cannot be empty";
    passwordReveal.src = "./images/icon-error.svg";
    
  } else {
    password.classList.remove('error');
    passwordErrorText.innerHTML = '';
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


passwordReveal.addEventListener('click', () =>{
  if (password.type === 'password'){
    password.type = 'text';
    passwordReveal.src = "./images/eye-solid.svg";

  } else {
    password.type = 'password';
    passwordReveal.src = "./images/eye-slash.svg";
  }
} )
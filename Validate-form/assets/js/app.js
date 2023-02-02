var userName = document.querySelector("#username");
var userEmail = document.querySelector("#email");
var userPass = document.querySelector("#password");
var userConfirmPass = document.querySelector("#confirm-password");
var form = document.querySelector(".container form");

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("succes");
  parent.classList.add("error");
  small.innerText = message;
}
function showSucces(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  parent.classList.add("succes");
  small.innerText = "";
}
function checkEmptyError(...list) {
  let isEmpty = false;
  list.forEach((element) => {
    element.value = element.value.trim();
    if (!element.value) {
      isEmpty = true;
      showError(element, `vui lòng nhập ${element.placeholder}`);
    } else {
      showSucces(element);
    }
  });
  return isEmpty;
}
function checkLengthInputError(input, min, max) {
  input.value = input.value.trim();
  if (!input.value) return true;
  let isLengthError = false;
  if (input.value.length < min) {
    isLengthError = true;
    showError(input, `${input.placeholder} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    isLengthError = true;
    showError(
      input,
      `${input.placeholder}  must be less than ${max} characters `
    );
  } else {
    showSucces(input);
  }
  return isLengthError;
}
function checkEmailError(input) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  input.value = input.value.trim();
  let isEmailError = !regexEmail.test(input.value);
  if (regexEmail.test(input.value)) {
    showSucces(input);
  } else {
    showError(input, `${input.placeholder} is not valid`);
  }
  return isEmailError;
}
function checkDifferentPass(Pass, confirmPass) {
  Pass.value = Pass.value.trim();
  confirmPass.value = confirmPass.value.trim();
  if (Pass.value != confirmPass.value) {
    showError(confirmPass, "Passwords do not match");
    return true;
  }
  return false;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isDifferentPass = checkDifferentPass(userPass, userConfirmPass);
  let isEmptyError = checkEmptyError(userName, userPass, userConfirmPass);
  let isEmailError = checkEmailError(userEmail);
  let isUserNameLengthError = checkLengthInputError(userName, 3, 15);
  let isUserPassLengthError = checkLengthInputError(userPass, 6, 25);
});

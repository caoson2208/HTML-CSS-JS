const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector("form");

const showError = (input, message) => {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.add("error");
  small.innerText = message;
};

const showSuccess = input => {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.remove("error");
  small.innerText = "";
};

const checkEmptyError = listInput => {
  let isEmtyError = false;
  listInput.forEach(input => {
    input.value = input.value.trim();

    if (!input.value) {
      isEmtyError = true;
      showError(input, "Please enter");
    } else {
      showSuccess(input);
    }
  });
};

const checkEmailError = input => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  input.value = input.value.trim();

  let isEmailError = !regexEmail.test(input.value);
  if (regexEmail.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email Invalid");
  }

  return isEmailError;
};

const checkLengthError = (input, min, max) => {
  input.value = input.value.trim();

  if (input.value.length < min) {
    showError(input, `Must have at least ${min} characters`);
    return true;
  }

  if (input.value.length > max) {
    showError(input, `Do not exceed ${max} characters`);
    return true;
  }

  return false;
};

const checkMathPasswordError = (passwordInput, confirmPasswordInput) => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    showError(confirmPassword, "Password does not match");
    return true;
  }

  return false;
};

form.addEventListener("submit", e => {
  e.preventDefault();

  let isEmptyError = checkEmptyError([
    username,
    email,
    password,
    confirmPassword,
  ]);

  let isEmailError = checkEmailError(email);
  let isUsernameError = checkLengthError(username, 3, 10);
  let isPasswordError = checkLengthError(password, 3, 10);
  let isMathPasswordError = checkMathPasswordError(password, confirmPassword);

  if (
    isEmailError ||
    isUsernameError ||
    isPasswordError ||
    isMathPasswordError
  ) {
    // do  nothing
  } else {
    // logic call API
  }

});

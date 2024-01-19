const signUpForm = document.getElementById("signup");
const minPwdLength = 6;

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const password = e.target["pwd"];
  const confirmPassword = e.target["cfm-pwd"];
  const email = e.target["email"];

  password.classList.remove("error");
  confirmPassword.classList.remove("error");
  email.classList.remove("error");

  removeErrorsFromElement(e.target);

  if (password.value !== confirmPassword.value) {
    password.classList.add("error");
    confirmPassword.classList.add("error");
    password.after(createErrorMessage("*Password must match!"));
  }
  if (password.value.length < minPwdLength) {
    password.classList.add("error");
    confirmPassword.classList.add("error");
    password.after(
      createErrorMessage(
        `*Password must be at least ${minPwdLength} characters`
      )
    );
  }
  if (!email.value.length) {
    email.classList.add("error");
    email.after(createErrorMessage("*Email must be present"));
  }
});

function createErrorMessage(message) {
  const el = document.createElement("i");

  el.innerHTML = message;
  el.classList.add("err-msg");

  return el;
}

function removeErrorsFromElement(el) {
  const errors = el.getElementsByClassName("err-msg");

  while (errors.length) {
    errors[0].remove();
  }
}

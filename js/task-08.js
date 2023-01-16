const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    const message = `All forms must be fill in!`;
    return alert(message);
  }
  console.log({"email": email.value, "password": password.value});
  e.currentTarget.reset();
}

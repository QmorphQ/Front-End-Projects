"use strickt";
// Event.preventDefault() предотвращает дефолтное поведение браузера при инициации на странице каог-нибудь события, если мы это указываем при перехвате события в EventListner функцией обработчиком
const inputParent = document.querySelector(".password-form");

function showPassword(event) {
  let a = event.target.previousElementSibling;
  a.getAttribute("type") === "password"
    ? a.setAttribute("type", "text")
    : a.setAttribute("type", "password");
}

function mainFormFunc(event) {
  document.querySelector(".alert_window").style.display = "none";
  if (event.target === eye_input || event.target === eye_confirm) {
    showPassword(event);
    return event.target.className === "fas fa-eye icon-password"
      ? (event.target.className = `fas fa-eye-slash icon-password`)
      : (event.target.className = "fas fa-eye icon-password");
  } else if (event.target === document.querySelector(".btn")) {
    event.preventDefault();
    if (
      document.getElementsByClassName("js-input_password").input_password
        .value ===
        document.getElementsByClassName("js-input_confirm").input_confirm
          .value &&
      document.getElementsByClassName("js-input_password").input_password
        .value !== ""
    ) {
      alert("You are welcome");
    } else {
      document.querySelector(".alert_window").style.display = "inline-block";
    }
  }
}

inputParent.addEventListener("click", mainFormFunc);

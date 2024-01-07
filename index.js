const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkinput();
});

function checkinput() {
  const firstnamevalue = firstname.value.trim();
  const lastnamevalue = lastname.value.trim();
  const emailvalue = email.value.trim();
  const passwordvalue = password.value.trim();

  if (firstnamevalue === "") {
    seterrorfor(firstname, "First name cannot be empty", "");
  } else {
    setsuccessfor(firstname);
  }

  if (lastnamevalue === "") {
    seterrorfor(lastname, "Last name cannot be empty", "");
  } else {
    setsuccessfor(lastname);
  }

  if (emailvalue === "") {
    seterrorfor(email, "Email cannot be empty", "email@example/com");
  } else if (!isEmail(emailvalue)) {
    seterrorfor(email, "Looks like this is not an email!", "email@example/com");
  } else {
    setsuccessfor(email);
  }

  if (passwordvalue === "") {
    seterrorfor(password, "Password cannot be empty", "");
  } else {
    setsuccessfor(password);
  }
}

function seterrorfor(input, message, text) {
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector("small");
  small.innerText = message;

  const element = formcontrol.querySelector("input");
  element.setAttribute("placeholder", text);

  formcontrol.className = "form-control error";
}

function setsuccessfor(input) {
  const formcontrol = input.parentElement;
  formcontrol.className = "form-control";
}

function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

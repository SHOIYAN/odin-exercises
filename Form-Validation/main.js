"use strict";

const form = document.getElementById("form");
const inputs = form.querySelectorAll("input");


form.addEventListener("submit", e => {
  e.preventDefault();

  inputs.forEach(input => {
    input.classList.add("touched");
    validateInput(input);
  });

  if (form.checkValidity()) {
    alert("✋ High five!");
  }
});


inputs.forEach(input => {
    input.addEventListener("input", handleInput);
  input.addEventListener("blur", handleBlur);
});


function handleBlur(e) {
  const input = e.target;
  input.classList.add("touched");
  validateInput(input);
}

function handleInput(e) {
  const input = e.target;

  if (!input.classList.contains("touched")) return;

  validateInput(input);
}


function validateInput(input) {
  const errorSpan = input.nextElementSibling;

  if (input.id === "passwordConfirmation") {
    const password = document.getElementById("password");
  
    if (input.value !== password.value) {
      input.setCustomValidity("Passwords do not match");
    } else {
      input.setCustomValidity("");
    }
  }

  if (input.validity.valid) {
    errorSpan.textContent = "";
    return;
  }

  if (input.validity.valueMissing) {
    errorSpan.textContent = "This field is required yoh!";
  } else if (input.validity.typeMismatch) {
    errorSpan.textContent = "Brah! Please enter a valid value";
  } else if (input.validity.tooShort) {
    errorSpan.textContent = `Must be at least ${input.minLength} characters fam`;
  }
  if (input.validity.customError) {
  errorSpan.textContent = input.validationMessage;
}


}


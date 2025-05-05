// Display current date
function displayDate() {
  const date = new Date();
  document.getElementById("currentDate").textContent = date.toDateString();
}

// Format phone
function fixphone() {
  const input = document.getElementById('phone');
  let digits = input.value.replace(/\D/g, "").slice(0, 10);
  if (digits.length > 6) {
    input.value = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  } else if (digits.length > 3) {
    input.value = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  } else if (digits.length > 0) {
    input.value = `(${digits}`;
  } else {
    input.value = "";
  }
}

// Validate phone
function checkPhone() {
  const digits = document.getElementById("phone").value.replace(/\D/g, "");
  document.getElementById("phoneError").textContent = digits.length !== 10 ? "Phone must be 10 digits." : "";
}

// Email
function checkEmail() {
  const email = document.getElementById("email");
  const error = document.getElementById("emailError");
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/i;
  error.textContent = regex.test(email.value.trim()) ? "" : "Enter a valid email.";
}

// First Name
function checkfirstname() {
  const field = document.getElementById("firstName");
  const error = document.getElementById("firstNameError");
  if (!field.value.trim()) {
    error.textContent = "First name required.";
  } else if (!/^[A-Za-z'-]{1,30}$/.test(field.value)) {
    error.textContent = "Only letters, apostrophes, dashes.";
  } else {
    error.textContent = "";
  }
}

// Middle Initial
function checkmiddleinitial() {
  const field = document.getElementById("middleInitial");
  const error = document.getElementById("middleInitialError");
  error.textContent = field.value && !/^[A-Z]?$/.test(field.value) ? "Must be single uppercase letter." : "";
}

// Last Name
function checklastname() {
  const field = document.getElementById("lastName");
  const error = document.getElementById("lastNameError");
  if (!field.value.trim()) {
    error.textContent = "Last name required.";
  } else if (!/^[A-Za-z'-]{1,30}$/.test(field.value)) {
    error.textContent = "Only letters, apostrophes, dashes.";
  } else {
    error.textContent = "";
  }
}

// DOB
function checkDOB() {
  const field = document.getElementById("dob");
  const error = document.getElementById("dobError");
  const date = new Date(field.value);
  const today = new Date();
  const oldest = new Date(today.getFullYear() - 120, 0);
  if (!field.value) {
    error.textContent = "DOB required.";
  } else if (date > today) {
    error.textContent = "DOB cannot be in future.";
  } else if (date < oldest) {
    error.textContent = "DOB cannot be over 120 years ago.";
  } else {
    error.textContent = "";
  }
}

// SSN
function checkSSN() {
  const field = document.getElementById("ssn");
  const error = document.getElementById("ssnError");
  error.textContent = /^\d{9}$/.test(field.value) ? "" : "SSN must be 9 digits.";
}

// Address
function checkAddr1() {
  const field = document.getElementById("address");
  const error = document.getElementById("addr1Error");
  error.textContent = !field.value.trim() ? "Address Line 1 required." : "";
}

function checkAddr2() {
  const field = document.getElementById("address2");
  const error = document.getElementById("addr2Error");
  error.textContent = field.value && field.value.trim().length < 2 ? "If used, must be 2+ characters." : "";
}

// City / ZIP
function checkCity() {
  const field = document.getElementById("city");
  const error = document.getElementById("cityError");
  error.textContent = !field.value.trim() ? "City required." : "";
}

function checkZip() {
  const field = document.getElementById("zip");
  const error = document.getElementById("zipError");
  error.textContent = /^\d{5}(-\d{4})?$/.test(field.value) ? "" : "Enter valid ZIP.";
}

// Satisfaction
function updateSatisfactionValue(slider) {
  document.getElementById("satisfaction-value").textContent = slider.value;
  validateSatisfaction();
}

function validateSatisfaction() {
  const value = document.getElementById("satisfaction-slider").value;
  document.getElementById("satisfactionError").textContent = value === "50" ? "Adjust slider." : "";
}

// Vaccines
function handleVaccineSelection() {
  const none = document.getElementById("none");
  const boxes = document.querySelectorAll("#vaccines-group input[type='checkbox']");
  if (event.target === none && none.checked) {
    boxes.forEach(b => { if (b !== none) b.checked = false; });
  } else if (event.target !== none && event.target.checked) {
    none.checked = false;
  }
  validateVaccines();
}

function validateVaccines() {
  const boxes = document.querySelectorAll('input[name="vaccines"]');
  const anyChecked = Array.from(boxes).some(cb => cb.checked);
  document.getElementById("vaccinesError").textContent = anyChecked ? "" : "Select at least one or 'None'.";
}

// User ID / Passwords
function validateUserID() {
  const field = document.getElementById("userID");
  const error = document.getElementById("userIDError");
  error.textContent = /^[A-Za-z][A-Za-z0-9_-]{4,29}$/.test(field.value) ? "" : "5–30 chars, start with letter, A-Z, 0-9, -, _";
}

function validatePasswords() {
  const pw1 = document.getElementById("password1");
  const pw2 = document.getElementById("password2");
  const e1 = document.getElementById("password1Error");
  const e2 = document.getElementById("password2Error");
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,30}$/;
  e1.textContent = regex.test(pw1.value) ? "" : "8–30 chars, upper/lower, digit, special.";
  e2.textContent = pw1.value === pw2.value ? "" : "Passwords do not match.";
}

// Cookies
function setCookie(name, value, hours) {
  const date = new Date();
  date.setTime(date.getTime() + (hours * 3600000));
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
  return document.cookie.split("; ").reduce((acc, c) => {
    const [k, v] = c.split("=");
    return k === name ? decodeURIComponent(v) : acc;
  }, "");
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Welcome
function showWelcomeMessage() {
  const name = getCookie("firstName");
  const header = document.querySelector("header");
  const msg = document.createElement("p");
  msg.style.fontWeight = "bold";
  msg.textContent = name ? `Welcome back, ${name}!` : "Welcome, New User!";
  header.appendChild(msg);

  if (name) {
    document.getElementById("firstName").value = name;
    const div = document.createElement("div");
    div.innerHTML = `<label><input type="checkbox" id="newUserBox"> Not ${name}? Start as new user.</label>`;
    header.appendChild(div);
    document.getElementById("newUserBox").addEventListener("change", () => {
      deleteCookie("firstName");
      document.getElementById("registration-form").reset();
      document.getElementById("firstName").value = "";
      alert("Cookie cleared.");
      location.reload();
    });
  }
}

function maybeSaveName() {
  const remember = document.getElementById("rememberMe");
  const name = document.getElementById("firstName").value.trim();
  if (remember && remember.checked && name) {
    setCookie("firstName", name, 48);
  } else {
    deleteCookie("firstName");
  }
}

function handleSubmit() {
  maybeSaveName();
  window.location.href = "thank-you.html";
}

function reviewFormData() {
  const form = document.getElementById("registration-form");
  const output = document.getElementById("outputformdata");
  const data = new FormData(form);
  let r = "PLEASE REVIEW THIS INFORMATION\n\n";

  const get = id => document.getElementById(id).value;
  r += `Marital Status: ${data.get("marital_status") || "Not selected"}\n`;
  r += `Immigration Status: ${data.get("immigration_status") || "Not selected"}\n`;
  r += `Race: ${data.get("race") || "Not selected"}\n`;
  r += `Vaccinations: ${data.getAll("vaccines").join(", ") || "None selected"}\n`;
  r += `Satisfaction: ${get("satisfaction-slider")}/100\n`;
  r += `\nName: ${get("firstName")} ${get("middleInitial")} ${get("lastName")}\n`;
  r += `DOB: ${get("dob")}\nEmail: ${get("email")}\nPhone: ${get("phone")}\n`;
  r += `Address: ${get("address")}\n         ${get("address2")}\n         ${get("city")}, ${get("state")} ${get("zip")}\n`;
  r += `User ID: ${get("userID")}`;
  output.textContent = r;
}

// Init
window.onload = function () {
  displayDate();
  showWelcomeMessage();
};

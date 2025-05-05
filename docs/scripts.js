// Display current date in header
function displayDate() {
    const date = new Date();
    document.getElementById("currentDate").textContent = date.toDateString();
  }
  
  // Format phone number as (XXX) XXX-XXXX while typing
  function fixphone() {
    const inputField = document.getElementById('phone');
    let digits = inputField.value.replace(/\D/g, "");
    if (digits.length > 10) digits = digits.slice(0, 10);
    let formatted = digits;
    if (digits.length > 6) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length > 3) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length > 0) {
      formatted = `(${digits}`;
    }
    inputField.value = formatted;
  }
  
  // Validate phone number is 10 digits
  function checkPhone() {
    const input = document.getElementById("phone").value;
    const digitsOnly = input.replace(/\D/g, "");
    const errorSpan = document.getElementById("phoneError");
    if (digitsOnly.length !== 10) {
      errorSpan.textContent = "Phone number must be exactly 10 digits.";
    } else {
      errorSpan.textContent = "";
    }
  }
  
  // Validate email format
  function checkEmail() {
    const field = document.getElementById("email");
    const error = document.getElementById("emailError");
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/i;
    if (!regex.test(field.value.trim())) {
      error.textContent = "Enter a valid email in the format name@domain.tld.";
    } else {
      error.textContent = "";
    }
  }
  
  // Validate first name using regex
  function checkfirstname() {
    const field = document.getElementById("firstName");
    const error = document.getElementById("firstNameError");
    const regex = /^[A-Za-z'-]{1,30}$/;
    if (!field.value.trim()) {
      error.textContent = "First name is required.";
    } else if (!regex.test(field.value)) {
      error.textContent = "Only letters, apostrophes, and dashes allowed.";
    } else {
      error.textContent = "";
    }
  }
  
  // Validate middle initial
  function checkmiddleinitial() {
    const field = document.getElementById("middleInitial");
    const error = document.getElementById("middleInitialError");
    const regex = /^[A-Z]?$/;
    if (field.value && !regex.test(field.value)) {
      error.textContent = "Middle initial must be a single uppercase letter or left blank.";
    } else {
      error.textContent = "";
    }
  }
  
  // Validate last name using regex
  function checklastname() {
    const field = document.getElementById("lastName");
    const error = document.getElementById("lastNameError");
    const regex = /^[A-Za-z'-]{1,30}$/;
    if (!field.value.trim()) {
      error.textContent = "Last name is required.";
    } else if (!regex.test(field.value)) {
      error.textContent = "Only letters, apostrophes, and dashes allowed.";
    } else {
      error.textContent = "";
    }
  }
  
  // Check if DOB is valid
  function checkDOB() {
    const field = document.getElementById("dob");
    const error = document.getElementById("dobError");
    const value = field.value;
    if (!value) {
      error.textContent = "Date of birth is required.";
      return;
    }
    const date = new Date(value);
    const today = new Date();
    const oldest = new Date();
    oldest.setFullYear(today.getFullYear() - 120);
    if (date > today) {
      error.textContent = "Date of birth cannot be in the future.";
    } else if (date < oldest) {
      error.textContent = "Date of birth cannot be more than 120 years ago.";
    } else {
      error.textContent = "";
    }
  }
  
  // Validate SSN format (9 digits, no dashes)
  function checkSSN() {
    const field = document.getElementById("ssn");
    const error = document.getElementById("ssnError");
    const regex = /^\d{9}$/;
    if (!regex.test(field.value)) {
      error.textContent = "SSN must be exactly 9 digits (no dashes).";
    } else {
      error.textContent = "";
    }
  }
  
  // Validate address line 1
  function checkAddr1() {
    const field = document.getElementById("address");
    const error = document.getElementById("addr1Error");
    if (!field.value.trim()) {
      error.textContent = "Address Line 1 is required.";
    } else {
      error.textContent = "";
    }
  }
  
  // Validate optional address line 2 if present
  function checkAddr2() {
    const field = document.getElementById("address2");
    const error = document.getElementById("addr2Error");
    if (field.value && field.value.trim().length < 2) {
      error.textContent = "If entered, Address Line 2 must be at least 2 characters.";
    } else {
      error.textContent = "";
    }
  }
  
  // Validate city
  function checkCity() {
    const field = document.getElementById("city");
    const error = document.getElementById("cityError");
    if (!field.value.trim()) {
      error.textContent = "City is required.";
    } else {
      error.textContent = "";
    }
  }
  
  // Validate ZIP code format
  function checkZip() {
    const field = document.getElementById("zip");
    const error = document.getElementById("zipError");
    const regex = /^\d{5}(-\d{4})?$/;
    if (!regex.test(field.value)) {
      error.textContent = "Enter a valid ZIP code (12345 or 12345-6789).";
    } else {
      error.textContent = "";
    }
  }
  
  // Update satisfaction slider value
  function updateSatisfactionValue(slider) {
    document.getElementById("satisfaction-value").textContent = slider.value;
    validateSatisfaction();
  }
  
  // Ensure satisfaction slider isn't default
  function validateSatisfaction() {
    const value = document.getElementById("satisfaction-slider").value;
    const error = document.getElementById("satisfactionError");
    error.textContent = value === "50" ? "Please adjust the slider from default value." : "";
  }
  
  // Handle vaccine logic including "None"
  function handleVaccineSelection() {
    const none = document.getElementById("none");
    const checkboxes = document.querySelectorAll("#vaccines-group input[type='checkbox']");
    if (event.target === none && none.checked) {
      checkboxes.forEach(cb => {
        if (cb !== none) cb.checked = false;
      });
    } else if (event.target !== none && event.target.checked) {
      none.checked = false;
    }
    validateVaccines();
  }
  
  // Ensure at least one vaccine is selected
  function validateVaccines() {
    const checkboxes = document.querySelectorAll('input[name="vaccines"]');
    const error = document.getElementById('vaccinesError');
    const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
    error.textContent = anyChecked ? "" : "Please select at least one vaccine or 'None of the above'.";
  }
  
  // Validate user ID
  function validateUserID() {
    const field = document.getElementById("userID");
    const error = document.getElementById("userIDError");
    const regex = /^[A-Za-z][A-Za-z0-9_-]{4,29}$/;
    if (!regex.test(field.value)) {
      error.textContent = "User ID must be 5-30 characters, start with a letter, and use only letters, numbers, dash or underscore.";
    } else {
      error.textContent = "";
    }
  }
  
  // Validate password fields
  function validatePasswords() {
    const pw1 = document.getElementById("password1");
    const pw2 = document.getElementById("password2");
    const error1 = document.getElementById("password1Error");
    const error2 = document.getElementById("password2Error");
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,30}$/;
  
    if (!regex.test(pw1.value)) {
      error1.textContent = "Password must be 8–30 characters, include upper and lower case, a digit, and a special character.";
    } else {
      error1.textContent = "";
    }
  
    if (pw1.value !== pw2.value) {
      error2.textContent = "Passwords do not match.";
    } else {
      error2.textContent = "";
    }
  }
  
  // Review form data
  function reviewFormData() {
    const output = document.getElementById("outputformdata");
    let review = "PLEASE REVIEW THIS INFORMATION\n\n";
  
    const marital = document.querySelector("input[name='marital_status']:checked");
    const immigration = document.querySelector("input[name='immigration_status']:checked");
    const race = document.querySelector("input[name='race']:checked");
    const vaccines = [...document.querySelectorAll("input[name='vaccines']:checked")].map(cb => cb.value).join(", ");
    const satisfaction = document.getElementById("satisfaction-slider").value;
  
    review += `Marital Status: ${marital ? marital.value : "Not selected"}\n`;
    review += `Immigration Status: ${immigration ? immigration.value : "Not selected"}\n`;
    review += `Race: ${race ? race.value : "Not selected"}\n`;
    review += `Vaccinations: ${vaccines || "None selected"}\n`;
    review += `Satisfaction: ${satisfaction}/100\n`;
  
    const firstName = document.getElementById("firstName").value;
    const middleInitial = document.getElementById("middleInitial").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const address2 = document.getElementById("address2").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value;
    const fullName = `${firstName} ${middleInitial || ''} ${lastName}`.trim();
  
    review += `\nName: ${fullName}\n`;
    review += `DOB: ${dob}\n`;
    review += `Email: ${email}\n`;
    review += `Phone: ${phone}\n`;
    review += `Address: ${address}`;
    if (address2) review += `\n         ${address2}`;
    review += `\n         ${city}, ${state} ${zip}`;
  
    const userID = document.getElementById("userID").value;
    review += `\nUser ID: ${userID}`;
  
    output.textContent = review;

    // Cookie helpers
    function setCookie(name, value, hours) {
      const date = new Date();
      date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    function getCookie(name) {
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookies = decodedCookie.split(';');
      for (let c of cookies) {
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(name + "=") === 0) return c.substring(name.length + 1, c.length);
      }
      return "";
    }

    function deleteCookie(name) {
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    // Run on load
    window.onload = function () {
      displayDate();
      const firstName = getCookie("firstName");

      const greeting = document.createElement("p");
      greeting.style.fontWeight = "bold";
      if (firstName) {
        greeting.textContent = `Welcome back, ${firstName}!`;
        document.getElementById("firstName").value = firstName;

        const resetBox = document.createElement("div");
        resetBox.innerHTML = `<label><input type="checkbox" id="newUserBox"> Not ${firstName}? Click here to start as a new user.</label>`;
        document.querySelector("header").appendChild(resetBox);

        document.getElementById("newUserBox").addEventListener("change", function () {
          if (this.checked) {
            deleteCookie("firstName");
            document.getElementById("registration-form").reset();
            document.getElementById("firstName").value = "";
            alert("Cookie cleared. You can now enter a new name.");
          }
        });

      } else {
        greeting.textContent = "Welcome new user!";
      }
      document.querySelector("header").appendChild(greeting);
    };

    // Save name if "Remember Me" is checked
    function maybeSaveName() {
      const remember = document.getElementById("rememberMe");
      const name = document.getElementById("firstName").value;
      if (remember && remember.checked) {
        setCookie("firstName", name, 48);
      } else {
        deleteCookie("firstName");
      }
    }
  }  
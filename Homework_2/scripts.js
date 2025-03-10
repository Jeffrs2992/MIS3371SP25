document.addEventListener('DOMContentLoaded', (event) => {
    // Update the current date
    let currentDateElement = document.getElementById('currentDate');
    let currentDate = new Date().toLocaleDateString();
    currentDateElement.textContent = currentDate;

    // Function to validate First Name
    function validateFirstName() {
        let firstName = document.getElementById('firstName').value;
        const pattern = /^[A-Za-z'-]{1,30}$/;

        if (pattern.test(firstName)) {
            document.getElementById('firstName').setCustomValidity("");
            return true;
        } else {
            document.getElementById('firstName').setCustomValidity("Please enter a valid first name (1-30 characters, letters, apostrophes, and dashes only).");
            return false;
        }
    }

    // Function to validate Middle Initial
    function validateMiddleInitial() {
        let middleInitial = document.getElementById('middleInitial').value;
        const pattern = /^[A-Za-z]?$/;

        if (pattern.test(middleInitial)) {
            document.getElementById('middleInitial').setCustomValidity("");
            return true;
        } else {
            document.getElementById('middleInitial').setCustomValidity("Please enter a valid middle initial (1 letter, letters only, blank/null ok).");
            return false;
        }
    }

    // Function to validate Date of Birth (DOB)
    function validateDOB() {
        const dobInput = document.getElementById('dob');
        let inputDate = new Date(dobInput.value);
        let currentDate = new Date();

        // Calculate the minimum acceptable DOB: 120 years ago
        let minBirthDate = new Date();
        minBirthDate.setFullYear(currentDate.getFullYear() - 120);

        // Validate the input date:
        if (inputDate > currentDate) {
            dobInput.setCustomValidity("The date of birth cannot be in the future.");
        } else if (inputDate < minBirthDate) {
            dobInput.setCustomValidity("The date of birth cannot be more than 120 years ago.");
        } else {
            dobInput.setCustomValidity(""); // Reset custom validity if the date is valid
        }
    }

    // Function to update Satisfaction Value
    function updateSatisfactionValue(event) {
        let slider = event.target;
        let sliderValue = slider.value;
        let satisfactionValue = document.getElementById('satisfaction-value');
        satisfactionValue.textContent = sliderValue;

        // Calculate the position of the value
        let sliderWidth = slider.offsetWidth;
        let valuePosition = ((sliderValue - slider.min) / (slider.max - slider.min)) * (sliderWidth - 30); // Adjust 30 to center the value
        satisfactionValue.style.left = `${valuePosition}px`;
    }

    // Add event listeners for validation
    document.getElementById('firstName').addEventListener('blur', validateFirstName);
    document.getElementById('middleInitial').addEventListener('blur', validateMiddleInitial);
    document.getElementById('dob').addEventListener('blur', validateDOB);

    // Add event listener for satisfaction slider
    document.getElementById('satisfaction-slider').addEventListener('input', updateSatisfactionValue);

    // Example function to populate review table with form data
    document.getElementById('reviewButton').addEventListener('click', function() {
        document.getElementById('reviewFirstName').textContent = document.getElementById('firstName').value;
        document.getElementById('reviewMiddleInitial').textContent = document.getElementById('middleInitial').value;
        document.getElementById('reviewLastName').textContent = document.getElementById('lastName').value;
        document.getElementById('reviewDOB').textContent = document.getElementById('dob').value;
        document.getElementById('reviewEmail').textContent = document.getElementById('email').value;

        // Perform validations and update status columns
        document.getElementById('reviewFirstNameStatus').textContent = validateFirstName() ? 'pass' : 'invalid';
        document.getElementById('reviewMiddleInitialStatus').textContent = validateMiddleInitial() ? 'pass' : 'invalid';
        document.getElementById('reviewDOBStatus').textContent = validateDOB() ? 'pass' : 'invalid';

        // Display the review table
        document.getElementById('reviewTable').style.display = 'table';
    });

    // Initial call to position the satisfaction value
    updateSatisfactionValue({target: document.getElementById('satisfaction-slider')});

    // Password Validation
    const form = document.querySelector("form"); // Replace with your form selector
    const errorMessage = document.getElementById("error-message"); // The error message element
    const specialChars = /[!@#%^&*()\-_=\\/><.,`~]/;
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const digit = /[0-9]/;

    form.addEventListener("submit", function(event) {
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm_password").value;
        
        // Assuming you have userID and username fields
        const userId = document.getElementById("userID").value; // Replace with actual user ID input field ID
        const username = document.getElementById("userName").value; // Replace with actual username input field ID

        // Password match check
        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match!";
            errorMessage.style.display = "block";
            event.preventDefault();
            return;
        }

        // Password length check
        if (password.length < 8 || password.length > 30) {
            errorMessage.textContent = "Password must be between 8 and 30 characters long.";
            errorMessage.style.display = "block";
            event.preventDefault();
            return;
        }

        // Password complexity check
        if (!upperCase.test(password) || !lowerCase.test(password) || !digit.test(password) || !specialChars.test(password)) {
            errorMessage.textContent = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
            errorMessage.style.display = "block";
            event.preventDefault();
            return;
        }

        // Password shouldn't contain user ID or username
        if (password.includes(userId) || password.includes(username)) {
            errorMessage.textContent = "Password cannot contain your user ID or name.";
            errorMessage.style.display = "block";
            event.preventDefault();
            return;
        }

        errorMessage.style.display = "none"; // Hide the error message if all checks pass
    });

    // Hide error message while typing
    document.getElementById("password").addEventListener("input", function() {
        errorMessage.style.display = "none";
    });
    document.getElementById("confirm_password").addEventListener("input", function() {
        errorMessage.style.display = "none";
    });

    document.querySelector('button[type="review"]').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting immediately
        
        // Get the values of all the fields
        const title = document.getElementById('title').value;
        const firstName = document.getElementById('firstName').value;
        const middleInitial = document.getElementById('middleInitial').value;
        const lastName = document.getElementById('lastName').value;
        const dob = document.getElementById('dob').value;
        const ssn = document.getElementById('ssn').value;
        const address = document.getElementById('address').value;
        const address2 = document.getElementById('address2').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const zip = document.getElementById('zip').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
    
        // Get the selected marital status
        let maritalStatus = document.querySelector('input[name="marital_status"]:checked');
        maritalStatus = maritalStatus ? maritalStatus.value : "Not specified";
    
        // Get the selected immigration status
        let immigrationStatus = document.querySelector('input[name="immigration_status"]:checked');
        immigrationStatus = immigrationStatus ? immigrationStatus.value : "Not specified";
    
        // Get the selected race
        let race = document.querySelector('input[name="race"]:checked');
        race = race ? race.value : "Not specified";
    
        // Get the selected vaccines
        let vaccines = [];
        document.querySelectorAll('input[name="vaccines"]:checked').forEach(function(checkbox) {
            vaccines.push(checkbox.value);
        });
        
        // Create a string with all the data to display
        let confirmationMessage = `
            <h3>Please review your information:</h3>
            <p><strong>Title:</strong> ${title}</p>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Middle Initial:</strong> ${middleInitial}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Social Security Number:</strong> ${ssn}</p>
            <p><strong>Address:</strong> ${address} ${address2 ? ', ' + address2 : ''}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>State:</strong> ${state}</p>
            <p><strong>ZIP:</strong> ${zip}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Marital Status:</strong> ${maritalStatus}</p>
            <p><strong>Immigration Status:</strong> ${immigrationStatus}</p>
            <p><strong>Race:</strong> ${race}</p>
            <p><strong>Vaccines:</strong> ${vaccines.join(', ')}</p>
        `;
        
        // Display confirmation message
        document.getElementById('confirmationMessage').innerHTML = confirmationMessage;
    });
});

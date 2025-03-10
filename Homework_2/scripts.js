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
            // Validation passed
            document.getElementById('firstName').setCustomValidity("");
        } else {
            // Validation failed
            document.getElementById('firstName').setCustomValidity("Please enter a valid first name (1-30 characters, letters, apostrophes, and dashes only).");
        }
    }

    // Function to validate Middle Initial
    function validateMiddleInitial() {
        let middleInitial = document.getElementById('middleInitial').value;
        const pattern = /^[A-Za-z]?$/;

        if (pattern.test(middleInitial)) {
            // Validation passed
            document.getElementById('middleInitial').setCustomValidity("");
        } else {
            // Validation failed
            document.getElementById('middleInitial').setCustomValidity("Please enter a valid middle initial (1 letter, letters only, blank/null ok).");
        }
    }

    // Add event listeners for validation
    document.getElementById('firstName').addEventListener('blur', validateFirstName);
    document.getElementById('middleInitial').addEventListener('blur', validateMiddleInitial);

    // Example function to populate review table with form data
    document.getElementById('reviewButton').addEventListener('click', function() {
        document.getElementById('reviewFirstName').textContent = document.getElementById('firstName').value;
        document.getElementById('reviewMiddleInitial').textContent = document.getElementById('middleInitial').value;
        document.getElementById('reviewLastName').textContent = document.getElementById('lastName').value;
        document.getElementById('reviewDOB').textContent = document.getElementById('dob').value;
        document.getElementById('reviewEmail').textContent = document.getElementById('email').value;

        // Perform validations and update status columns
        document.getElementById('reviewFirstNameStatus').textContent = validateFirstName(document.getElementById('firstName').value) ? 'pass' : 'invalid';
        // Repeat for other fields...

        // Display the review table
        document.getElementById('reviewTable').style.display = 'table';
    });

    // Additional validation functions can be added here...
});

# Website/Form Synopsis

The website is a user registration and form submission platform that collects various personal information and validates input to ensure that the user submits correct data. It includes several key functionalities:

## 1. User Information Collection
- **Personal Details:** First Name, Middle Initial, Last Name, Date of Birth, Email, Phone Number, etc.
- **Address Information:** Street Address, City, State, ZIP Code.
- **Demographic Data:** Marital Status, Immigration Status, Race, Vaccination Information.

## 2. Form Validation
- **First Name and Middle Initial:** Ensure they follow proper character patterns (e.g., no numbers, special characters except for apostrophes or dashes).
- **Date of Birth (DOB):** Validate that the DOB is not in the future and not older than 120 years.
- **Password Validation:** Ensure passwords meet criteria for complexity (e.g., length, use of uppercase/lowercase, digits, and special characters).
- **Confirm Password:** Check that the confirmation password matches the original password.

## 3. User Interaction
- **Dynamic Satisfaction Slider:** A slider lets the user express their satisfaction, with a dynamic value update shown beside it.
- **Review Section:** A button displays all the data entered by the user, including a validation status for fields.
- **Confirmation Message:** After submission, the user can review all the collected data.

## 4. Error Handling
- The form will display error messages when a user’s input doesn't meet the required validation criteria (such as invalid date of birth or weak password).

---

# What I Am Particularly Happy With That Works

## 1. Date of Birth Validation:
- The DOB input ensures that the user cannot select a future date or a date more than 120 years ago. This is a vital functionality to prevent incorrect or impossible data submissions.

## 2. Dynamic Satisfaction Slider:
- The slider value updates in real-time and shifts its position to the correct location based on the value, providing a seamless experience for users to select their satisfaction level.

## 3. Password Validation:
- The password complexity rules (including checks for upper/lowercase letters, numbers, and special characters) are working well, ensuring that passwords meet security standards.
- The confirmation field for passwords ensures both passwords match before allowing submission.

## 4. Review Table & User Input Display:
- When the user clicks the "Review" button, their form data is displayed for them to check before final submission. This ensures transparency and reduces the likelihood of errors.

---

# What I Haven’t Yet Gotten Working

## 1. Confirmation Message Display:
- While the review section is functional, dynamically generating and displaying the confirmation message with all the collected data isn’t fully integrated with the confirmation process (it doesn’t update the confirmation message properly yet).

## 2. Full Password Handling:
- Although the password complexity and match validation works, the full integration with the form submission (e.g., preventing submission until valid) needs to be more seamless.

## 3. Error Display on Password Fields:
- The error message for password mismatches isn’t consistently hidden as it should be when the user starts typing again. The behavior should automatically clear the error message once the user corrects their input.

# file name: data-dictionary.md
# Author: Japheth Silva
# Date created: 2025-02-09
# Date last edited: 2025-02-09
# Version: 1.0
# Description: data dictionary for Patient Registration Form (Homework 1)
# This data dictionary describes the fields in the patient registration form for Pawsitive Medicine.

### Personal Information

| Field Name        | Data Type | Description                                | Constraints                              |
|-------------------|-----------|--------------------------------------------|------------------------------------------|
| title             | String    | The patient's title (e.g., Mr, Mrs, Dr)    | Required, select one from options       |
| firstName         | String    | The patient's first name                   | Required, max length 30 characters      |
| middleInitial     | String    | The patient's middle initial               | Optional, max length 1 character        |
| lastName          | String    | The patient's last name                    | Required, max length 30 characters      |
| dob               | Date      | The patient's date of birth                | Required, format MM/DD/YYYY             |
| ssn               | String    | The patient's social security number       | Required, format XXX-XX-XXXX            |

### Mailing Information

| Field Name        | Data Type | Description                                | Constraints                              |
|-------------------|-----------|--------------------------------------------|------------------------------------------|
| address           | String    | The first line of the patient's address    | Required, max length 30 characters      |
| address2          | String    | The second line of the address (optional)  | Optional, max length 30 characters      |
| city              | String    | The city of the patient's address          | Required, max length 30 characters      |
| state             | String    | The state of the patient's address         | Required, select one from options       |
| zip               | String    | The zip code of the patient's address      | Required, format 5-10 characters        |

### Contact Information

| Field Name        | Data Type | Description                                | Constraints                              |
|-------------------|-----------|--------------------------------------------|------------------------------------------|
| email             | String    | The patient's email address                | Required, valid email format            |
| phone             | String    | The patient's phone number                 | Optional, format 123-456-7890           |

### Additional Information

| Field Name        | Data Type | Description                                | Constraints                              |
|-------------------|-----------|--------------------------------------------|------------------------------------------|
| marital_status    | String    | The patient's marital status               | Required, select one option             |
| immigration_status| String    | The patient's immigration status           | Required, select one option             |
| race              | String    | The patient's race                         | Required, select one option             |

### Vaccination History

| Field Name        | Data Type | Description                                | Constraints                              |
|-------------------|-----------|--------------------------------------------|------------------------------------------|
| vaccines          | Array     | The vaccines the patient has received      | Optional, select multiple options       |

### Account Setup

| Field Name        | Data Type | Description                                | Constraints                              |
|-------------------|-----------|--------------------------------------------|------------------------------------------|
| userID            | String    | The patient's user ID                      | Required, max length 20 characters      |
| password          | String    | The patient's password                     | Required, valid password format         |
| confirm_password  | String    | Confirmation of the patient's password     | Required, must match password           |

# Input Validation Examples

This is a sample web application that demonstrates how to implement input validation at the UI level using **vanilla JavaScript**, **HTML**, and **CSS**. The purpose of this app is to ensure users cannot enter data that doesn't conform to specified formats, enhancing data integrity and improving user experience.

**Live Demo:** [Input Validation Examples on GitHub Pages](https://dchandlerp.github.io/input_validation_examples/)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Validation Details](#validation-details)
- [Contributing](#contributing)
- [License](#license)

## Features

The application includes the following input validation examples:

1. **Date Input Validation**
   - Validates dates in the `MM/DD/YYYY` format.
   - Ensures valid calendar dates (e.g., rejects February 30th).
   - Enforces an age restriction (users must be at least 18 years old).

2. **Credit Card Number Validation**
   - Checks that credit card numbers follow the correct format.
   - Implements the **Luhn algorithm** for number validity.
   - Masks input for security, displaying only the last four digits.

3. **Postal/ZIP Code Validation (US-specific)**
   - Validates US ZIP codes:
     - Standard 5-digit format (e.g., `12345`).
     - Extended ZIP+4 format (e.g., `12345-6789`).

4. **Username Validation**
   - Allows only letters, numbers, and underscores.
   - Sets a minimum length of 3 characters and a maximum of 15 characters.
   - Prevents the use of disallowed words or profanity.

5. **URL/Website Input Validation**
   - Validates that the input is a properly formatted URL starting with `http://` or `https://`.

6. **Numeric Range Validation**
   - Ensures numeric inputs fall within a specified range (e.g., quantity between 1 and 100).

7. **Password Strength Validation**
   - Enforces password policies requiring:
     - Minimum length of 8 characters.
     - At least one uppercase letter, one lowercase letter, one number, and one special character.
     - Exclusion of spaces and disallowed special characters.
   - Provides real-time feedback on password strength with a visual indicator.

8. **Password Confirmation**
   - Requires users to re-enter their password.
   - Validates that both password entries match before form submission.

9. **File Upload Validation**
   - Accepts image files (.jpg, .jpeg, .png, .gif) up to 2MB.
   - Provides a preview of the uploaded image before final submission.

10. **Checkbox Validation**
    - Ensures mandatory checkboxes are checked (e.g., agreeing to Terms and Conditions and Privacy Policy).

11. **Phone Number Validation (US-specific)**
    - Validates US phone numbers in standard formats.
    - Automatically formats phone numbers as the user types.

12. **Real-Time Validation Feedback**
    - Provides instant validation feedback as users fill out each field.
    - Uses visual cues, such as green borders for valid inputs and red borders for invalid inputs.

## Getting Started

### Prerequisites

To run this application locally, you need a modern web browser that supports HTML5, CSS3, and ES6 JavaScript.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/DChandlerP/input_validation_examples.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd input_validation_examples
   ```

3. **Open the Application**

   - Open `index.html` in your preferred web browser.

   - You can also start a local web server if you prefer:

     ```bash
     # Using Python 3.x
     python -m http.server 8000
     ```

     Then navigate to `http://localhost:8000` in your browser.

## Usage

- Fill out the form fields in the application.
- Real-time validation feedback will guide you to correct any errors.
- Upon successful validation of all fields, you can submit the form.
- Note: The form submission is for demonstration purposes and does not send data to a server.

## Project Structure

```
input_validation_examples/
── index.html       # The main HTML file containing the form
── styles.css       # CSS styles for the application
── script.js        # JavaScript code for validations
── README.md        # Documentation of the project
```

## Validation Details

- **Date Input**
  - Accepts dates in `MM/DD/YYYY` format.
  - Checks for valid dates and age requirement (18+).

- **Credit Card Number**
  - Accepts 16-digit numbers.
  - Validates using the Luhn algorithm.
  - Masks input after validation.

- **ZIP Code**
  - Validates 5-digit and ZIP+4 formats.

- **Username**
  - Enforces character rules and length.
  - Blocks disallowed usernames.

- **Password**
  - Checks for complexity requirements.
  - Displays strength meter.
  - Confirms matching passwords.

- **File Upload**
  - Accepts specific image file types.
  - Limits file size.
  - Shows image preview.

- **Phone Number**
  - Formats input to standard US formats.
  - Validates number structure.

- **Real-Time Feedback**
  - Uses color cues and error messages.
  - Guides users to correct inputs immediately.

## Contributing

Contributions are welcome! If you'd like to enhance this project, please follow these steps:

1. **Fork the Repository**

   Click the "Fork" button at the top right of the repository page.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/your-username/input_validation_examples.git
   ```

3. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**

   - Improve existing validations.
   - Add new input validation examples.
   - Enhance the user interface.

5. **Commit Your Changes**

   ```bash
   git commit -am 'Add new feature'
   ```

6. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Submit a Pull Request**

   - Navigate to the original repository.
   - Click on "Pull Requests" and then "New Pull Request".

## License

This project is licensed under the [MIT License](LICENSE).

---

*This README was generated to provide an overview of the Input Validation Examples project, its features, and how to get started. The application serves as a learning tool for implementing client-side validations using core web technologies.*
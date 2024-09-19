/* script.js */

// 1. Date Input Validation
function validateBirthdate() {
    const birthdateInput = document.getElementById('birthdate');
    const errorSpan = document.getElementById('birthdate-error');
    const birthdate = birthdateInput.value.trim();
    const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/;

    if (!datePattern.test(birthdate)) {
        errorSpan.textContent = 'Enter date in MM/DD/YYYY format.';
        birthdateInput.classList.add('invalid');
        birthdateInput.classList.remove('valid');
        return false;
    }

    // Parse the date components
    const [month, day, year] = birthdate.split('/').map(Number);
    const selectedDate = new Date(year, month - 1, day);
    const today = new Date();

    // Check if date is valid
    if (
        selectedDate.getFullYear() !== year ||
        selectedDate.getMonth() + 1 !== month ||
        selectedDate.getDate() !== day
    ) {
        errorSpan.textContent = 'Enter a valid date.';
        birthdateInput.classList.add('invalid');
        birthdateInput.classList.remove('valid');
        return false;
    }

    // Check if user is at least 18 years old
    let age = today.getFullYear() - selectedDate.getFullYear();
    const m = today.getMonth() - selectedDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < selectedDate.getDate())) {
        age--;
    }

    if (age < 18) {
        errorSpan.textContent = 'You must be at least 18 years old.';
        birthdateInput.classList.add('invalid');
        birthdateInput.classList.remove('valid');
        return false;
    }

    errorSpan.textContent = '';
    birthdateInput.classList.remove('invalid');
    birthdateInput.classList.add('valid');
    return true;
}

// 2. Credit Card Number Validation
function luhnCheck(num) {
    let arr = (num + '')
        .split('')
        .reverse()
        .map((x) => parseInt(x));
    let sum = arr.reduce((acc, val, idx) => {
        if (idx % 2 !== 0) {
            val *= 2;
            if (val > 9) val -= 9;
        }
        return acc + val;
    }, 0);
    return sum % 10 === 0;
}

function maskCreditCard(num) {
    return num.replace(/\d(?=\d{4})/g, '*');
}

function validateCreditCard() {
    const ccInput = document.getElementById('credit-card');
    const errorSpan = document.getElementById('cc-error');
    let ccNum = ccInput.value.replace(/\D/g, '');

    if (!/^\d{16}$/.test(ccNum)) {
        errorSpan.textContent = 'Credit card number must be 16 digits.';
        ccInput.classList.add('invalid');
        ccInput.classList.remove('valid');
        return false;
    }

    if (!luhnCheck(ccNum)) {
        errorSpan.textContent = 'Invalid credit card number.';
        ccInput.classList.add('invalid');
        ccInput.classList.remove('valid');
        return false;
    }

    ccInput.value = maskCreditCard(ccNum);
    ccInput.classList.remove('invalid');
    ccInput.classList.add('valid');
    errorSpan.textContent = '';
    return true;
}

// 3. Postal/ZIP Code Validation (US-specific)
function validateZipCode() {
    const zipInput = document.getElementById('zip-code');
    const errorSpan = document.getElementById('zip-error');
    const zipCode = zipInput.value.trim();

    const zipPattern = /^\d{5}(-\d{4})?$/;

    if (!zipPattern.test(zipCode)) {
        errorSpan.textContent = 'Enter a valid US ZIP code.';
        zipInput.classList.add('invalid');
        zipInput.classList.remove('valid');
        return false;
    }

    zipInput.classList.remove('invalid');
    zipInput.classList.add('valid');
    errorSpan.textContent = '';
    return true;
}

// 4. Username Validation
function validateUsername() {
    const usernameInput = document.getElementById('username');
    const errorSpan = document.getElementById('username-error');
    const username = usernameInput.value.trim();

    const usernamePattern = /^\w{3,15}$/;

    if (!usernamePattern.test(username)) {
        errorSpan.textContent = '3-15 chars; letters, numbers, underscores only.';
        usernameInput.classList.add('invalid');
        usernameInput.classList.remove('valid');
        return false;
    }

    // Disallowed words
    const disallowedWords = ['admin', 'root', 'superuser'];
    if (disallowedWords.includes(username.toLowerCase())) {
        errorSpan.textContent = 'This username is not allowed.';
        usernameInput.classList.add('invalid');
        usernameInput.classList.remove('valid');
        return false;
    }

    usernameInput.classList.remove('invalid');
    usernameInput.classList.add('valid');
    errorSpan.textContent = '';
    return true;
}

// 5. URL/Website Input Validation
function validateWebsite() {
    const websiteInput = document.getElementById('website');
    const errorSpan = document.getElementById('website-error');
    const website = websiteInput.value.trim();

    const urlPattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;

    if (!urlPattern.test(website)) {
        errorSpan.textContent = 'Enter a valid URL starting with http:// or https://';
        websiteInput.classList.add('invalid');
        websiteInput.classList.remove('valid');
        return false;
    }

    websiteInput.classList.remove('invalid');
    websiteInput.classList.add('valid');
    errorSpan.textContent = '';
    return true;
}

// 6. Numeric Range Validation
function validateQuantity() {
    const quantityInput = document.getElementById('quantity');
    const errorSpan = document.getElementById('quantity-error');
    const quantity = parseInt(quantityInput.value, 10);

    if (isNaN(quantity) || quantity < 1 || quantity > 100) {
        errorSpan.textContent = 'Quantity must be between 1 and 100.';
        quantityInput.classList.add('invalid');
        quantityInput.classList.remove('valid');
        return false;
    }

    quantityInput.classList.remove('invalid');
    quantityInput.classList.add('valid');
    errorSpan.textContent = '';
    return true;
}

// 7. Password Strength Validation
function validatePassword() {
    const passwordInput = document.getElementById('password');
    const errorSpan = document.getElementById('password-error');
    const strengthMeter = document.getElementById('password-strength');
    const password = passwordInput.value;

    const requirements = [
        { regex: /.{8,}/, message: 'At least 8 characters' },
        { regex: /[A-Z]/, message: 'At least one uppercase letter' },
        { regex: /[a-z]/, message: 'At least one lowercase letter' },
        { regex: /\d/, message: 'At least one number' },
        { regex: /[!@#$%^&*(),.?":{}|<>]/, message: 'At least one special character' },
        { regex: /^\S*$/, message: 'No spaces allowed' }
    ];

    let passed = 0;
    for (let req of requirements) {
        if (req.regex.test(password)) {
            passed++;
        }
    }

    // Update strength meter
    const strength = (passed / requirements.length) * 100;
    strengthMeter.style.width = strength + '%';

    if (strength < 50) {
        strengthMeter.classList.add('strength-weak');
        strengthMeter.classList.remove('strength-medium', 'strength-strong');
    } else if (strength < 100) {
        strengthMeter.classList.add('strength-medium');
        strengthMeter.classList.remove('strength-weak', 'strength-strong');
    } else {
        strengthMeter.classList.add('strength-strong');
        strengthMeter.classList.remove('strength-weak', 'strength-medium');
    }

    if (strength < 100) {
        errorSpan.textContent = 'Password does not meet all criteria.';
        passwordInput.classList.add('invalid');
        passwordInput.classList.remove('valid');
        return false;
    }

    errorSpan.textContent = '';
    passwordInput.classList.remove('invalid');
    passwordInput.classList.add('valid');
    return true;
}

// 8. Password Confirmation
function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorSpan = document.getElementById('confirm-password-error');

    if (confirmPasswordInput.value !== password) {
        errorSpan.textContent = 'Passwords do not match.';
        confirmPasswordInput.classList.add('invalid');
        confirmPasswordInput.classList.remove('valid');
        return false;
    }

    errorSpan.textContent = '';
    confirmPasswordInput.classList.remove('invalid');
    confirmPasswordInput.classList.add('valid');
    return true;
}

// 9. File Upload Validation
function validateFileUpload() {
    const fileInput = document.getElementById('profile-picture');
    const errorSpan = document.getElementById('file-error');
    const previewImage = document.getElementById('preview-image');
    const file = fileInput.files[0];

    if (!file) {
        errorSpan.textContent = 'Please select a file.';
        fileInput.classList.add('invalid');
        fileInput.classList.remove('valid');
        previewImage.style.display = 'none';
        return false;
    }

    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!validTypes.includes(file.type)) {
        errorSpan.textContent = 'File type must be JPG, JPEG, PNG, or GIF.';
        fileInput.classList.add('invalid');
        fileInput.classList.remove('valid');
        previewImage.style.display = 'none';
        return false;
    }

    if (file.size > 2 * 1024 * 1024) {
        errorSpan.textContent = 'File size must be less than 2MB.';
        fileInput.classList.add('invalid');
        fileInput.classList.remove('valid');
        previewImage.style.display = 'none';
        return false;
    }

    // Preview the image
    const reader = new FileReader();
    reader.onload = function (e) {
        previewImage.src = e.target.result;
        previewImage.style.display = 'block';
    };
    reader.readAsDataURL(file);

    errorSpan.textContent = '';
    fileInput.classList.remove('invalid');
    fileInput.classList.add('valid');
    return true;
}

// 10. Checkbox Validation
function validateTerms() {
    const termsCheckbox = document.getElementById('terms');
    const errorSpan = document.getElementById('terms-error');

    if (!termsCheckbox.checked) {
        errorSpan.textContent = 'You must agree to the terms and conditions.';
        termsCheckbox.classList.add('invalid');
        termsCheckbox.classList.remove('valid');
        return false;
    }

    errorSpan.textContent = '';
    termsCheckbox.classList.remove('invalid');
    termsCheckbox.classList.add('valid');
    return true;
}

// 11. Phone Number Validation (US-specific)
function formatPhoneNumber(phone) {
    const cleanPhone = phone.replace(/\D/g, '');
    const match = cleanPhone.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}

function validatePhoneNumber() {
    const phoneInput = document.getElementById('phone-number');
    const errorSpan = document.getElementById('phone-error');
    let phone = phoneInput.value;

    const formattedPhone = formatPhoneNumber(phone);
    if (!formattedPhone) {
        errorSpan.textContent = 'Enter a valid US phone number.';
        phoneInput.classList.add('invalid');
        phoneInput.classList.remove('valid');
        return false;
    }

    phoneInput.value = formattedPhone;
    phoneInput.classList.remove('invalid');
    phoneInput.classList.add('valid');
    errorSpan.textContent = '';
    return true;
}

// Form Submission Validation
document.getElementById('sample-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const isValid =
        validateBirthdate() &
        validateCreditCard() &
        validateZipCode() &
        validateUsername() &
        validateWebsite() &
        validateQuantity() &
        validatePassword() &
        validateConfirmPassword() &
        validateFileUpload() &
        validateTerms() &
        validatePhoneNumber();

    if (isValid) {
        alert('Form submitted successfully!');
        // You can perform further actions here (e.g., send data to server)
    } else {
        alert('Please correct the errors in the form.');
    }
});

// Event Listeners for Real-Time Feedback
document.getElementById('birthdate').addEventListener('blur', validateBirthdate);
document.getElementById('credit-card').addEventListener('blur', validateCreditCard);
document.getElementById('zip-code').addEventListener('blur', validateZipCode);
document.getElementById('username').addEventListener('blur', validateUsername);
document.getElementById('website').addEventListener('blur', validateWebsite);
document.getElementById('quantity').addEventListener('input', validateQuantity);
document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('confirm-password').addEventListener('input', validateConfirmPassword);
document.getElementById('profile-picture').addEventListener('change', validateFileUpload);
document.getElementById('terms').addEventListener('change', validateTerms);
document.getElementById('phone-number').addEventListener('blur', validatePhoneNumber);

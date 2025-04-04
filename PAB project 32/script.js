// Get DOM elements
const lengthInput = document.getElementById('length');
const includeUppercase = document.getElementById('includeUppercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSpecialChars = document.getElementById('includeSpecialChars');
const passwordDisplay = document.getElementById('password');
const generateButton = document.getElementById('generate');

// Define character sets
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

// Generate the password based on the selected options
function generatePassword() {
    let characterSet = lowercaseChars;

    // Add selected character sets to the base set
    if (includeUppercase.checked) {
        characterSet += uppercaseChars;
    }
    if (includeNumbers.checked) {
        characterSet += numberChars;
    }
    if (includeSpecialChars.checked) {
        characterSet += specialChars;
    }

    // Set the password length based on the input value
    const passwordLength = parseInt(lengthInput.value);
    
    // Ensure the password length is within the allowed range
    if (passwordLength < 8 || passwordLength > 20) {
        alert("Password length must be between 8 and 20 characters.");
        return;
    }

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    // Display the generated password
    passwordDisplay.textContent = password;
}

// Event listener for the generate button
generateButton.addEventListener('click', generatePassword);

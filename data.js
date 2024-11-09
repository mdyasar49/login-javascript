// Create the login form
var loginForm = document.createElement('form');

// Create the username label and input field
var usernameLabel = document.createElement('label');
usernameLabel.textContent = 'Username:';
var usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.required = true;

// Create the password label and input field
var passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password:';
var passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.required = true;

// Create the submit button
var submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = 'Login';

// Append all elements to the form
loginForm.appendChild(usernameLabel);
loginForm.appendChild(usernameInput);
loginForm.appendChild(passwordLabel);
loginForm.appendChild(passwordInput);
loginForm.appendChild(submitButton);

// Attach a submit event listener to the form
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the values entered in the username and password fields
  var username = usernameInput.value;
  var password = passwordInput.value;

  // Perform validation
  if (username === '') {
    displayError('Please enter your username');
    return;
  }

  if (password === '') {
    displayError('Please enter your password');
    return;
  }

  // Perform additional validation if needed

  // If all validation passed, simulate form submission
  alert('Login successful!');
});

// Function to display error message
function displayError(errorMessage) {
  var errorDiv = document.createElement('div');
  errorDiv.style.color = 'red';
  errorDiv.textContent = errorMessage;
  document.body.appendChild(errorDiv);
}

// Append the form to the body
document.body.appendChild(loginForm);

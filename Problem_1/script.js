function validateForm() {
 let isValid = true;

 // Username validation
 const username = document.getElementById('username').value;
 const usernameError = document.getElementById('usernameError');
if (username === "") {
 usernameError.textContent = "Username should not be empty.";
 isValid = false;
 } else if (username.length > 50) {
 usernameError.textContent = "Username should not exceed 50 characters.";
 isValid = false;
 } else {
 usernameError.textContent = "";
 }

 // Password validation
 const password = document.getElementById('password').value;
 const passwordError = document.getElementById('passwordError');
 const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 if (!passwordPattern.test(password)) {
  passwordError.textContent = "Password must be at least 8 characters long, contain at least one special symbol, one number, and both uppercase and lowercase characters.";
  isValid = false;
 } else {
  passwordError.textContent = "";
 }

 // Email validation
  const email = document.getElementById('Email').value;
  const emailError = document.getElementById('EmailError');
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
   emailError.textContent = "Please enter a valid email address.";
   isValid = false;
 } else {
   emailError.textContent = "";
}

return isValid; // Return true if all validations pass, otherwise false
}

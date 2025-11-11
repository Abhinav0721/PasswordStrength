const passwordInput = document.getElementById('password');
const strengthText = document.getElementById('strength-text');
const suggestions = document.getElementById('suggestions');
const container = document.querySelector('.container');

// Create the strength bar fill element
const bar = document.createElement('div');
bar.id = 'strength-bar-fill';
document.getElementById('strength-bar').appendChild(bar);

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  let score = 0;
  let tips = [];

  // Length
  if (password.length >= 8) score++;
  else tips.push("Make your password at least 8 characters long.");

  // Uppercase
  if (/[A-Z]/.test(password)) score++;
  else tips.push("Add at least one uppercase letter.");

  // Lowercase
  if (/[a-z]/.test(password)) score++;
  else tips.push("Include lowercase letters.");

  // Numbers
  if (/[0-9]/.test(password)) score++;
  else tips.push("Add numbers to make it harder to guess.");

  // Special characters
  if (/[^A-Za-z0-9]/.test(password)) score++;
  else tips.push("Include at least one special character (e.g. !, @, #).");

  const strength = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];
  strengthText.textContent = "Strength: " + strength[score];

  // Update strength bar
  const widthPercent = (score / 5) * 100;
  bar.style.width = widthPercent + '%';
  if(score <= 2) bar.style.backgroundColor = 'red';
  else if(score === 3) bar.style.backgroundColor = 'orange';
  else bar.style.backgroundColor = 'green';

  // Update tips
  suggestions.innerHTML = "";
  tips.forEach(tip => {
    const li = document.createElement("li");
    li.textContent = tip;
    suggestions.appendChild(li);
  });
});

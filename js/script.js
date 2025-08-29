greet();

/// Greet the user
function greet() {
  let username = prompt("Please enter your name:");
  document.getElementById("username").innerText = username || "Guest";
}

/// Validate form & show output
function validateForm() {
  let name = document.getElementById("name-input").value.trim();
  let birthdate = document.getElementById("birthdate-input").value;
  let sex = document.getElementById("sex-input").value;
  let message = document.getElementById("message-input").value.trim();

  // Validate name: only letters and spaces, allow single quote
  const nameRegex = /^[A-Za-z\s']+$/;
  if (!nameRegex.test(name)) {
    alert("Name can only contain letters, spaces, and single quotes.");
    return;
  }

  // Validate birthdate: must be a valid date and not in the future
  if (!birthdate) {
    alert("Please enter your birthdate.");
    return;
  }

  const birthDate = new Date(birthdate);
  const today = new Date();
  const minAgeDate = new Date();
  minAgeDate.setFullYear(today.getFullYear() - 120); // Max 120 years ago

  if (birthDate > today) {
    alert("Birthdate cannot be in the future.");
    return;
  }

  if (birthDate < minAgeDate) {
    alert("Please enter a valid birthdate.");
    return;
  }

  // Check if all required fields are filled
  if (!sex) {
    alert("Please select your sex.");
    return;
  }

  alert("Thank you, " + name + "!");

  document.getElementById("output-name").innerText = name;
  document.getElementById("output-birthdate").innerText = birthdate;
  document.getElementById("output-sex").innerText = sex;
  document.getElementById("output-message").innerText = message;
}

/// Load image tiles
function loadTiles() {
  const rows = 10;
  const cols = 10;
  const container = document.getElementById("tilesGrid");

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const img = document.createElement("img");
      img.src = `img_tiles/tile_${r}_${c}.png`;
      img.alt = `tile ${r}-${c}`;
      container.appendChild(img);
    }
  }
}

/// Run loadTiles when page loads
window.addEventListener("DOMContentLoaded", loadTiles);

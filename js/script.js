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

  if (!name || !birthdate || !sex) {
    alert("Please fill out all required fields.");
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
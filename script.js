console.log("Script Running");

// Create a helper function that moves a penguin across the grid
// The function should accept a penguin element and a column position
// Only allow movement while the column is less than or equal to 6
const movePenguin = (penguin, col) => {
  if (col <= 6) {
    penguin.style.setProperty("grid-column", col);
  }
};



// Create position variables for each penguin and set them all to 1
let tux_pos = 1;
let daisy_pos = 1;
let rocky_pos = 1;

// Query selectors for all buttons and penguins go here
const tuxBtn = document.querySelector("#tux-button");
const daisyBtn = document.querySelector("#daisy-button");
const rockyBtn = document.querySelector("#rocky-button");

const tuxPenguin = document.querySelector("#tux-penguin");
const daisyPenguin = document.querySelector("#daisy-penguin");
const rockyPenguin = document.querySelector("#rocky-penguin");

const winnerBox = document.querySelector("#winner");

// Write the function that moves Tux forward
// Increase the tux position
// Call the helper function to update the penguin position
// Call the winner check function
const moveTux = () => {
  tux_pos++;
  movePenguin(tuxPenguin, tux_pos);
  checkWinner("Tux");
};

// Write the function that moves Daisy forward
const moveDaisy = () => {
  daisy_pos++;
  movePenguin(daisyPenguin, daisy_pos);
  checkWinner("Daisy");
};

// Write the function that moves Rocky forward
const moveRocky = () => {
  rocky_pos++;
  movePenguin(rockyPenguin, rocky_pos);
  checkWinner("Rocky");
};

// Write a function that checks if a penguin reached column 6
// If so, display the winner message (example: "Tux got the fish! 🐟")
// Disable all buttons when a winner is found
const checkWinner = (name) => {
  if (tux_pos === 6 || daisy_pos === 6 || rocky_pos === 6) {
    winnerBox.textContent = `${name} got the fish! 🐟`;
    disableButtons();
  }
};

const disableButtons = () => {
  tuxBtn.disabled = true;
  daisyBtn.disabled = true;
  rockyBtn.disabled = true;
};

// Add event listeners for each button
// Each button should trigger its own movement function
tuxBtn.addEventListener("click", moveTux);
daisyBtn.addEventListener("click", moveDaisy);
rockyBtn.addEventListener("click", moveRocky);
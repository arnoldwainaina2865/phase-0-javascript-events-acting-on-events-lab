// Your code here
// First, grab the dodger element
const dodger = document.getElementById("dodger");

// Function to move the dodger to the left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the dodger to the right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  
  // The game field is 400px wide and the dodger is 40px wide
  // So the maximum left position is 400 - 40 = 360px
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

// Add event listener for keydown events
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
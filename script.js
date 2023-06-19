// Get references to the dino and cactus elements in the HTML
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

// Function to make the dino jump
function jump() {
    // Check if the dino is already jumping to prevent multiple jumps
    if (dino.classList != "jump") {
        // Add the "jump" class to initiate the jump animation
        dino.classList.add("jump");

        // Remove the "jump" class after 300 milliseconds to complete the jump animation
        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
}

// Set up an interval to check for collision and determine if the game is still running
let isAlive = setInterval(function () {
    // Get the current position of the dino and cactus
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    // Check if the dino and cactus collide
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        // Display an alert indicating that the game is over
        alert("Game Over!");
    }
}, 10);

// Add an event listener for the "keydown" event to trigger the jump function
document.addEventListener("keydown", function (event) {
    jump();
});

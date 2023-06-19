# Dino Game

The Dino Game is a simple browser-based game that showcases my work. It is built using HTML, CSS, and JavaScript.

## Gameplay

The player controls the dinosaur character and must navigate it through the game by making it jump over oncoming cacti. The game ends if the dinosaur collides with a cactus.

## Installation

To play the Dino Game, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/dino-game.git`
2. Navigate to the project directory: `cd dino-game`
3. Open the `index.html` file in your preferred web browser.

## Game Elements

The game consists of the following elements:

- **Dinosaur**: Represented by the `dino` element. It can jump to avoid obstacles.
- **Cactus**: Represented by the `cactus` element. It acts as an obstacle that the dinosaur must avoid.

## Styling

The game elements are styled using CSS. The `styling.css` file contains the CSS rules that define the appearance of the game elements.

## JavaScript Functionality

The game logic is implemented using JavaScript. The `script.js` file contains the necessary functions to handle player input, control the dinosaur's movement, detect collisions, and manage the game's state.

## Functionality Overview

- The `jump()` function allows the dinosaur to jump by adding and removing the `jump` class for the jump animation.
- The `isAlive` interval checks for collisions between the dinosaur and cactus. If a collision is detected, an alert is displayed, indicating that the game is over.
- The `keydown` event listener triggers the `jump()` function when a key is pressed, allowing the player to control the dinosaur.

## Video Tutorial

The development of this project was based on the following video tutorial: [YouTube Video](https://youtu.be/i7nIutSLvdU)

## Contributing

Contributions to the Dino Game project are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

The Dino Game project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- This project was inspired by the classic T-Rex game found in Google Chrome's offline error page.

---

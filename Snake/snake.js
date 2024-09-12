// Initialize variables
const canvas = document.getElementById("snakeCanvas");
const ctx = canvas.getContext("2d");
const boxSize = 20; // Size of each square (snake and food)
let snake = [{ x: 10 * boxSize, y: 10 * boxSize }];
let food = {
  x: Math.floor(Math.random() * (canvas.width / boxSize)) * boxSize,
  y: Math.floor(Math.random() * (canvas.height / boxSize)) * boxSize,
};
let direction = { x: 0, y: 0 };
let score = 0;
let isGameRunning = false;
let gameInterval;

// Draw the snake
function drawSnake() {
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "green" : "white";
    ctx.fillRect(snake[i].x, snake[i].y, boxSize, boxSize);
    ctx.strokeRect(snake[i].x, snake[i].y, boxSize, boxSize);
  }
}

// Draw food
function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, boxSize, boxSize);
}

// Update the snake's position
function updateSnakePosition() {
  const head = { x: snake[0].x + direction.x * boxSize, y: snake[0].y + direction.y * boxSize };

  // Check for wall collision
  if (head.x < 0 || head.y < 0 || head.x >= canvas.width || head.y >= canvas.height) {
    stopGame();
    alert("Game over! You hit the wall.");
  }

  // Check for self-collision
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      stopGame();
      alert("Game over! You collided with yourself.");
    }
  }

  // Check for food collision
  if (head.x === food.x && head.y === food.y) {
    score++;
    food = {
      x: Math.floor(Math.random() * (canvas.width / boxSize)) * boxSize,
      y: Math.floor(Math.random() * (canvas.height / boxSize)) * boxSize,
    };
  } else {
    snake.pop(); // Remove the tail if no food is eaten
  }

  snake.unshift(head); // Add new head
}

// Handle key press for controlling the snake
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp" && direction.y === 0) {
    direction = { x: 0, y: -1 };
  } else if (e.key === "ArrowDown" && direction.y === 0) {
    direction = { x: 0, y: 1 };
  } else if (e.key === "ArrowLeft" && direction.x === 0) {
    direction = { x: -1, y: 0 };
  } else if (e.key === "ArrowRight" && direction.x === 0) {
    direction = { x: 1, y: 0 };
  }
});

// Start the game
function startGame() {
  if (!isGameRunning) {
    isGameRunning = true;
    gameInterval = setInterval(gameLoop, 100);
  }
}

// Stop the game
function stopGame() {
  isGameRunning = false;
  clearInterval(gameInterval);
}

// Main game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  drawSnake();
  drawFood();
  updateSnakePosition();
}

// Instructions on the screen
function drawInstructions() {
  ctx.fillStyle = "black";
  ctx.font = "20px Press Start 2P";
  ctx.fillText("Press ENTER to start", 50, canvas.height / 2);
  ctx.fillText("Use arrow keys to move", 20, canvas.height / 2 + 40);
}

// Listen for the Enter key to start the game
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    startGame();
  }
});

// Display the instructions initially
drawInstructions();

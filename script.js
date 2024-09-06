const gameBox = document.getElementById('gameBox');

// Array of colors
const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8'];

gameBox.addEventListener('click', () => {
    // Generate a random index to select a color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    gameBox.style.backgroundColor = randomColor;
});

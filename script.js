const gameBox = document.getElementById('gameBox');

// Array of colors
const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8'];

gameBox.addEventListener('click', () => {
    // Generate a random index to select a color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    gameBox.style.backgroundColor = randomColor;
});



(function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    emailjs.sendForm("service_wu8dava", "YOUR_TEMPLATE_ID", this) // Replace with your service and template IDs
        .then(function() {
            alert("Message sent successfully!");
            $('#contactModal').modal('hide'); // Hide the modal
            document.getElementById("contactForm").reset(); // Reset the form
        }, function(error) {
            alert("Failed to send message. Please try again.");
            console.log("Error:", error);
        });
});

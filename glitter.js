// Function to generate a random boolean with a given probability
function getRandomBoolean(probability) {
    return Math.random() < probability;
}

// Function to track mouse position and possibly display the GIF
function trackMouse(event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;

    // Check if the random function returns true with a probability of 5%
    if (getRandomBoolean(0.05)) {
        // Create a new image element
        var img = new Image();
        img.src = "https://media.giphy.com/media/uM3krJsX7jtM3A5mCa/giphy.gif"; // URL of the GIF
        img.style.position = "absolute";
        img.style.left = (mouseX - 25) + "px"; // Adjusting position to center the GIF
        img.style.top = (mouseY - 25) + "px"; // Adjusting position to center the GIF
        img.style.width = "250px";

        // Check if the container div exists, if not create it
        var container = document.querySelector('.glitter-images');
        if (!container) {
            container = document.createElement('div');
            container.className = 'glitter-images';
            document.body.appendChild(container);
        }

        // Append the image to the container
        container.appendChild(img);

        // Remove older images if there are more than 25
        var images = container.getElementsByTagName('img');
        if (images.length > 25) {
            container.removeChild(images[0]); // Remove the oldest image
        }
    }
}

// Event listener to call the trackMouse function when mouse moves
document.addEventListener("mousemove", trackMouse);

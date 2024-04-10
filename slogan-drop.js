

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the slogan element
    const slogan = document.querySelector('.slogan');
    
    // Add a scroll event listener to the window
    window.addEventListener('scroll', function() {
        // Get the current scroll position
        const scrollPosition = window.scrollY;
        
        // Define the threshold where the slogan should drop down
        const threshold = 200; // Adjust this value as needed
        
        // Check if the scroll position has crossed the threshold
        if (scrollPosition > threshold) {
            // If yes, add a class to the slogan to make it drop down
            slogan.classList.add('drop-down');
        } else {
            // If not, remove the class to reset its position
            slogan.classList.remove('drop-down');
        }
    });
});

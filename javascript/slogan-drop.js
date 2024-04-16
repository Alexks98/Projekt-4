// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the slogan element
    const slogan = document.querySelector('.slogan');
    console.log(slogan); //This is to check if the slogang element is correctly selected 

    // This add's a scroll event listener to the window
    window.addEventListener('scroll', function() {
        // Get the current scroll position
        const scrollPosition = window.scrollY;
        console.log("SCcrolle position;", scrollPosition); //This is to check the current scroll position
        
        // This defines the threshold where the slogan should start appearing
        const threshold = 100;
        console.log("Threshold:", threshold); // This is to check the treshold value
        
        // This is to check if the scroll position has crossed the threshold
        if (scrollPosition > threshold) {
            // If yes, add the 'visible' class to make the slogan appear
            console.log("Adding 'visible' class to slogan");
            slogan.classList.add('visible');
        } else {
            // If not, remove the 'visible' class to hide the slogan
            console.log("Removing 'visible' class from slogan");
            slogan.classList.remove('visivle');
        }
    });
});
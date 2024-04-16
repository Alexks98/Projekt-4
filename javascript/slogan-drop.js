document.addEventListener("DOMContentLoaded", function() {
    const slogan = document.querySelector('.slogan');
    const navHeight = 60; // Height of the navigation bar
    let isAbove = true;

    // Function to toggle slogan position
    function toggleSloganPosition() {
        if (isAbove) {
            slogan.style.top = navHeight + 'px';
            console.log("Slogan moved above navigation bar.");
        } else {
            slogan.style.top = '-' + (100 - navHeight) + 'px';
            console.log("Slogan moved below navigation bar.");
        }
        isAbove = !isAbove;
    }

    // Initial animation
    toggleSloganPosition();

    // Continuous loop animation
    setInterval(function() {
        toggleSloganPosition();
    }, 3000); // Adjust the interval as needed (3000ms = 3 seconds)
});


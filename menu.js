document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById("burgerMenu");
    const navLinks = document.getElementById("navLinks");
  
    // Tilføj en hændelseslytter til burger-menuen
    burgerMenu.addEventListener("click", function() {
      // Skift visningen af menuen baseret på dens nuværende tilstand
      if (navLinks.style.display === "none" || navLinks.style.display === "") {
        navLinks.style.display = "block";
        navLinks.style.width = "100%"; // Tilpas bredden til at fylde skærmen
      } else {
        navLinks.style.display = "none";
      }
    });
  });
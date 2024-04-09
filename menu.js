document.addEventListener("DOMContentLoaded", function() {
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const navLinks = document.getElementById("navLinks");
    
    // Tilføj en hændelseslytter til burger-menuen for at åbne menuen
    openBtn.addEventListener("click", function() {
      navLinks.style.display = "block";
      closeBtn.style.display = "block"; // Vis "x" knappen
      document.body.classList.add("nav-open"); // Tilføj klassen "nav-open" til body
    });
    
    // Tilføj en hændelseslytter til "x" knappen for at lukke menuen
    closeBtn.addEventListener("click", function() {
      navLinks.style.display = "none";
      closeBtn.style.display = "none"; // Skjul "x" knappen igen
      document.body.classList.remove("nav-open"); // Fjern klassen "nav-open" fra body
    });
  });
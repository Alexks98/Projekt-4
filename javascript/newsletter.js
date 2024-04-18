  // Antal gange teksten skal gentages
  const repetitions = 1;

  const texts = ['Be the first to get the news!', 'Sign up with your email'];

 // Elementet, hvor teksten skal indsættes
 var newsContainer = document.getElementById('newsContainer');

// Loop gennem antallet af gentagelser og tilføj teksten fra arrayet
for (let i = 0; i < repetitions; i++) {
    texts.forEach(text => {
        var newsHeader = document.createElement('h3');
        newsHeader.textContent = text;
        newsContainer.appendChild(newsHeader);
    });
 }

const nyhedsbrevForm = document.getElementById('nyhedsbrevForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Forhindrer formen i at blive indsendt traditionelt

    // Hent e-mail-adressen fra inputfeltet
    var email = document.getElementById('email').value;

    // Gem e-mail-adressen i localStorage
    gemEmail(email);

    // Vis en bekræftelsesbesked til brugeren
    alert('Tak for din tilmelding til vores nyhedsbrev!' );

    // Brug e-mail-adressen i din kode, hvis nødvendigt
    console.log('Email:', email);
});

//funktion
function gemEmail(email) {
    // Gem e-mail-adressen i localStorage
    localStorage.setItem('nyhedsbrevEmail', email);
    console.log('E-mail gemt:', email);
}

//if-else
// Hent data fra localStorage
let gemtEmail = localStorage.getItem('nyhedsbrevEmail');
if (gemtEmail !== null) {
    console.log('Gemt e-mail fra localStorage:', gemtEmail);
} 
else {
    console.log('Ingen e-mail gemt i localStorage.');
}
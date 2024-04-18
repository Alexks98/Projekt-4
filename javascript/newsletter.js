const nyhedsbrevForm = document.getElementById('nyhedsbrevForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Forhindrer formen i at blive indsendt traditionelt

    // Hent e-mail-adressen fra inputfeltet
    var email = document.getElementById('email').value;

    // Gem e-mail-adressen i localStorage
    gemEmail(email);

    // Vis en bekræftelsesbesked til brugeren
    alert('Tak for din tilmelding til vores nyhedsbrev!');

    // Brug e-mail-adressen i din kode, hvis nødvendigt
    console.log('Email:', email);
});

function gemEmail(email) {
    // Gem e-mail-adressen i localStorage
    localStorage.setItem('nyhedsbrevEmail', email);
    console.log('E-mail gemt:', email);
}

// Hent data fra localStorage
let gemtEmail = localStorage.getItem('nyhedsbrevEmail');
if (gemtEmail !== null) {
    console.log('Gemt e-mail fra localStorage:', gemtEmail);
} else {
    console.log('Ingen e-mail gemt i localStorage.');
}
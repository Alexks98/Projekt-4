
const nyhedsbrevForm = document.getElementById('nyhedsbrevForm').addEventListener('submit', function(e) {
 // Forhindre formen i at submitte traditionelt

 alert('Tak fordi du tilmelde dig vores nyhedsbrev!');
 // Laver en popup besked om tak for tilmelding

 // Bruges til at finde fejl
    var email = document.getElementById('email').value;
    console.log('Email:', email);

   // Clear inputfeltet efter tilmelding
   document.getElementById('email').value = '';
});


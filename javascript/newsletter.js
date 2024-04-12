// script.js
document.getElementById('nyhedsbrevFrom').addEventListener('submit', function(e) {
    e.preventDefault(); // Forhindre formen i at submitte traditionelt

    var email = document.getElementById('email').value;
    console.log('Email:', email);

   // Vis en besked på skærmen
   var beskedElement = document.createElement('tilmelding');
   beskedElement.textContent = 'Tak for din tilmelding!';
   document.body.appendChild(beskedElement);

   // Clear inputfeltet efter tilmelding
   document.getElementById('email').value = '';
});

// Tilføj event listener til knappen
document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault(); // Forhindrer formen i at blive indsendt traditionelt

    // Simulerer formularen, der indsendes når knappen klikkes
    document.getElementById('nyhedsbrevForm').submit();
});

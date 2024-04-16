let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('#navLinks'); //varialer, globalt scope//


//event/funktion//
const hamburgerEvent = (navigation, close, open) => {
  navigationItems.style.display = navigation;
  closeHam.style.display = close;
  openHam.style.display = open;

//if elese//
  if (navigation === 'flex') {
      navigationItems.classList.add('active');
      
      document.querySelector('.slogan').style.display = 'none';
      document.querySelector('.CTA').style.display = 'none';
  } else {
      navigationItems.classList.remove('active');
      
      document.querySelector('.slogan').style.display = 'block';
      document.querySelector('.CTA').style.display = 'block';
  }

};
openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));
//  mangler Arrays, Loops, //


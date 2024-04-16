
//put indhold i menu// array
const menuItems = [
  { text: 'WHAT WE DO', link: 'index.html' },
  { text: 'WHO WE ARE', link: '#' },
  { text: 'WHERE WE WORK', link: '#' },
  { text: 'GET INVOLVED', link: 'get-involved.html' }
];

const navLinks = document.querySelector('#navLinks ul');

let i=1; //global//

//loop//

menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.text;
    a.href = item.link;
    a.setAttribute("id", "navTitle" + i);
    li.appendChild(a);
    navLinks.appendChild(li);
    i++;
});


//event/funktion//
let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('#navLinks'); //varialer, globalt scope//

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


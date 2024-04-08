const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = carouselInner.children;
const carouselPrev = carousel.querySelector('.carousel-prev');
const carouselNext = carousel.querySelector('.carousel-next');
let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    index = carouselItems.length - 1;
  } else if (index >= carouselItems.length) {
    index = 0;
  }

  carouselInner.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

carouselPrev.addEventListener('click', prevSlide);
carouselNext.addEventListener('click', nextSlide);

// Automatically advance to the next slide every 5 seconds
setInterval(() => {
  nextSlide();
}, 5000);
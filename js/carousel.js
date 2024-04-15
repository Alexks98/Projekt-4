const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach((el, i) => {
            el.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3', 'gallery-item-4', 'gallery-item-5');
            el.classList.add(`gallery-item-${i+1}`);
        });
    }

    setCurrentState(direction) {
        if (direction.classList.contains('gallery-controls-previous')) {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }
    
    setControls() {
        this.carouselControls.forEach(control => {
            const button = document.createElement('button');
            button.className = `gallery-controls-button gallery-controls-${control}`;
            button.innerText = control;
            button.setAttribute('aria-label', control);
            galleryControlsContainer.appendChild(button);
        });
    }
    
    useControls() {
        this.carouselControls.forEach(control => {
            const trigger = document.querySelector(`.gallery-controls-${control}`);
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                this.setCurrentState(trigger);
            });
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
exampleCarousel.setControls();
exampleCarousel.useControls();
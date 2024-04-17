const galleryContainer = document.querySelector('.gallery-container'); //variables/
const galleryControlsContainer = document.querySelector('.gallery-controls'); //variables//
const galleryControls = ['previous', 'next']; //an array//
const galleryItems = document.querySelectorAll('.gallery-item'); //variables// //retrieves the imaages within the gallery container through DOM//

class Carousel {

    constructor(container, items, controls) {
        this.carouselContainer = container; //reference to the DOM element that acts as the container for the carousel images//
        this.carouselControls = controls; // reference the control elements, such as the buttons for navigating the carousel//
        this.carouselArray = [...items];  //Here, the spread operator ('…') is used to create a new array from items, which represents the individual images in the carousel//
    }

    //Loop number 1 + function//
    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3', 'gallery-item-4', 'gallery-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }

    //if-else control structure//
    setCurrentState(control) {
        //Checks//
        if (control.classList.contains('gallery-controls-previous')) {
            this.carouselArray.unshift(this.carouselArray.pop()); //Action When Condition is True//
        } else {
            this.carouselArray.push(this.carouselArray.shift()); //Action when condition is false using else//
        }
        this.updateGallery();
    }
    
    //function//
    setControls() {
        this.carouselControls.forEach(control => {
            const button = document.createElement('button');
            button.className = `gallery-controls-${control}`;
            button.setAttribute('aria-label', control); // Accessibility for screen readers//
            galleryControlsContainer.appendChild(button);
        });
    }
    
    //Loop number 2 + Event handling//
    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();

const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

// Clone the first image to the end of the slide
const firstImageClone = images[0].cloneNode(true);
slide.appendChild(firstImageClone);

const totalWidth = images.length * images[0].clientWidth;
slide.style.width = `${totalWidth}px`;

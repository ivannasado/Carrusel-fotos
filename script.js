let currentIndex = 0;

fetch('images.json')
  .then(response => response.json())
  .then(data => {
    const slidesContainer = document.querySelector('.slides');
    data.images.forEach(image => {
      const slide = document.createElement('div');
      slide.classList.add('slide');
      slide.innerHTML = `<img src="images/${image.src}" alt="${image.alt}">`;
      slidesContainer.appendChild(slide);
    });
  })
  .catch(error => console.error('Error fetching images:', error));

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
  currentIndex = index;
}

function nextSlide() {
  const totalSlides = document.querySelectorAll('.slide').length;
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  const totalSlides = document.querySelectorAll('.slide').length;
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentIndex);
});

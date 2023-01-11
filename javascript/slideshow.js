let slideIndex = 1;
showSlides(slideIndex);

const plusSlides = (n) => showSlides(slideIndex += n);

const currentSlide = (n) => showSlides(slideIndex = n);

const showSlides = (n) => {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  slideIndex = n > slides.length ? 1 : n < 1 ? slides.length : slideIndex;
  Array.from(slides).forEach((slide, index) => {
    slide.style.display = index + 1 === slideIndex ? 'block' : 'none';
  });
  Array.from(dots).forEach((dot, index) => {
    dot.className = index + 1 === slideIndex ? dot.className + " active" : dot.className.replace(" active", "");
  });
};
let slideIndex = 1;
showSlides(slideIndex);

// Next & previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// SIDE NAVIGATION
let sideNav = document.getElementById("mySidenav");

const changeSideNavWidth = (currentViewPort, newWidth) => {
  if (currentViewPort.matches) { // If media query matches
    sideNav.style.width = newWidth;
  }
}

// Open Side Navigation
const openNav = () => {
  sideNav.style.width = "350px";

  let viewport1 = window.matchMedia("(max-width: 535px)");
  changeSideNavWidth(viewport1, '250px'); // Call listener function at run time
  viewport1.addListener(changeSideNavWidth); // Attach listener function on state changes

  let viewport2 = window.matchMedia("(max-width: 320px)");
  changeSideNavWidth(viewport2, '200px'); // Call listener function at run time
  viewport2.addListener(changeSideNavWidth); // Attach listener function on state changes
}

// Close Side Navigation
const closeNav = () => {
  sideNav.style.width = "0";
}


// CHAT SECTION
// const students = document.getElementsByClassName("students");
// const prevButton = document.getElementById("myBtn1");
// const nextButton = document.getElementById("myBtn2"); 
  
// const removeStudent = () => {
//   let student = document.getElementsByClassName("student");
//   for (let i=0; i < student.length; i++) {
//     student[i].remove();
//   }
  
// }

// nextButton.addEventListener("click", removeStudent);
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

const openSideNav = () => {
  sideNav.style.width = "350px";
  const reduceSideNavWidth1 = (viewport1) => {
    if (viewport1.matches) { // If media query matches
      sideNav.style.width = "250px";
    }
  }
  let viewport1 = window.matchMedia("(max-width: 535px)");
  reduceSideNavWidth1(viewport1); // Call listener function at run time
  viewport1.addListener(reduceSideNavWidth1); // Attach listener function on state changes


  const reduceSideNavWidth2 = (viewport2) => {
    if (viewport2.matches) {
      sideNav.style.width = "200px";
    }
  }
  let viewport2 = window.matchMedia("(max-width: 320px)");
  reduceSideNavWidth2(viewport2);
  viewport2.addListener(reduceSideNavWidth2);
}

const closeSideNav = () => {
  sideNav.style.width = "0";
}


// Chat Section
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
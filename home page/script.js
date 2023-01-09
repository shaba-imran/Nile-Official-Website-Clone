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

const setSideNavWidth = (width) => {
  sideNav.style.width = width;
}

const openSideNav = () => {
  setSideNavWidth("350px");

  const reduceSideNavWidth = (viewport) => {
    if (viewport.matches) {
      if (viewport.media === "(max-width: 535px)") {
        setSideNavWidth("250px");
      } else if (viewport.media === "(max-width: 320px)") {
        setSideNavWidth("200px");
      }
    }
  }

  let viewport1 = window.matchMedia("(max-width: 535px)");
  reduceSideNavWidth(viewport1);
  viewport1.addListener(reduceSideNavWidth);

  let viewport2 = window.matchMedia("(max-width: 320px)");
  reduceSideNavWidth(viewport2);
  viewport2.addListener(reduceSideNavWidth);
}

const closeSideNav = () => {
  setSideNavWidth("0");
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
// SIDE NAVIGATION
const getElementById = (value) => {
  return document.getElementById(value);
}

const setSideNavWidth = (width) => {
  getElementById('mySidenav').style.width = width;
}

const openSideNav = () => {
  setSideNavWidth("350px");

  const reduceSideNavWidth = (viewport) => {
    if (viewport.matches) { // If media query matches
      if (viewport.media === "(max-width: 535px)") {
        setSideNavWidth("250px");
      } else if (viewport.media === "(max-width: 320px)") {
        setSideNavWidth("200px");
      }
    }
  }

  let viewport1 = window.matchMedia("(max-width: 535px)");
  reduceSideNavWidth(viewport1); // Call listener function at run time
  viewport1.addListener(reduceSideNavWidth); // Attach listener function on state changes

  let viewport2 = window.matchMedia("(max-width: 320px)");
  reduceSideNavWidth(viewport2);
  viewport2.addListener(reduceSideNavWidth);
}

const closeSideNav = () => {
  setSideNavWidth("0");
}

const setMarginValue = (idName, value) => {
  getElementById(idName).style.marginBottom = value;
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
const openFirstDropDown = () => {
  getElementById('myFirstDropdown').classList.toggle("show");
  setMarginValue('firstDropdown', '730px');
  const changeMarginValue = (viewport) => {
    if (viewport.matches) {
      if (viewport.media === "(max-width: 535px)") {
        setMarginValue('firstDropdown', '780px');
      } else if (viewport.media === "(max-width: 450px)") {
        setMarginValue('firstDropdown', '725px');
      } else if (viewport.media === "(max-width: 320px)") {
        setMarginValue('firstDropdown', '760px');
      }
    }
  }
  let viewport1 = window.matchMedia("(max-width: 535px)");
  changeMarginValue(viewport1);
  viewport1.addListener(changeMarginValue);

  let viewport2 = window.matchMedia("(max-width: 450px)");
  changeMarginValue(viewport2);
  viewport2.addListener(changeMarginValue);

  let viewport3 = window.matchMedia("(max-width: 320px)");
  changeMarginValue(viewport3);
  viewport3.addListener(changeMarginValue);
}

const openSecondDropDown = () => {
  getElementById('mySecondDropdown').classList.toggle("show");
  setMarginValue('secondDropdown', '720px');
  const changeMarginValue = (viewport) => {
    if (viewport.matches) {
      if (viewport.media === "(max-width: 535px)") {
        setMarginValue('secondDropdown', '825px');
      } else if (viewport.media === "(max-width: 450px)") {
        setMarginValue('secondDropdown', '720px');
      } else if (viewport.media === "(max-width: 320px)") {
        setMarginValue('secondDropdown', '830px');
      }
    }
  }
  let viewport1 = window.matchMedia("(max-width: 535px)");
  changeMarginValue(viewport1);
  viewport1.addListener(changeMarginValue);

  let viewport2 = window.matchMedia("(max-width: 450px)");
  changeMarginValue(viewport2);
  viewport2.addListener(changeMarginValue);

  let viewport3 = window.matchMedia("(max-width: 320px)");
  changeMarginValue(viewport3);
  viewport3.addListener(changeMarginValue);
}

const openThirdDropDown = () => {
  getElementById('myThirdDropdown').classList.toggle("show");
  setMarginValue('thirdDropdown', '570px');
  const changeMarginValue = (viewport) => {
    if (viewport.matches) {
      if (viewport.media === "(max-width: 535px)") {
        setMarginValue('thirdDropdown', '630px');
      } else if (viewport.media === "(max-width: 450px)") {
        setMarginValue('thirdDropdown', '580px');
      } else if (viewport.media === "(max-width: 320px)") {
        setMarginValue('thirdDropdown', '625px');
      }
    }
  }
  let viewport1 = window.matchMedia("(max-width: 535px)");
  changeMarginValue(viewport1);
  viewport1.addListener(changeMarginValue);

  let viewport2 = window.matchMedia("(max-width: 450px)");
  changeMarginValue(viewport2);
  viewport2.addListener(changeMarginValue);

  let viewport3 = window.matchMedia("(max-width: 320px)");
  changeMarginValue(viewport3);
  viewport3.addListener(changeMarginValue);
}

const openFourthDropDown = () => {
  getElementById('myFourthDropdown').classList.toggle("show");
  setMarginValue('fourthDropdown', '300px');
  const changeMarginValue = (viewport) => {
    if (viewport.matches) {
      if (viewport.media === "(max-width: 535px)") {
        setMarginValue('fourthDropdown', '310px');
      } else if (viewport.media === "(max-width: 450px)") {
        setMarginValue('fourthDropdown', '285px');
      } else if (viewport.media === "(max-width: 320px)") {
        setMarginValue('fourthDropdown', '320px');
      }
    }
  }
  let viewport1 = window.matchMedia("(max-width: 535px)");
  changeMarginValue(viewport1);
  viewport1.addListener(changeMarginValue);

  let viewport2 = window.matchMedia("(max-width: 450px)");
  changeMarginValue(viewport2);
  viewport2.addListener(changeMarginValue);

  let viewport3 = window.matchMedia("(max-width: 320px)");
  changeMarginValue(viewport3);
  viewport3.addListener(changeMarginValue);
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("Dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        setMarginValue('firstDropdown', '0');
        setMarginValue('secondDropdown', '0');
        setMarginValue('thirdDropdown', '0');
        setMarginValue('fourthDropdown', '0');
      }
    }
  }
}
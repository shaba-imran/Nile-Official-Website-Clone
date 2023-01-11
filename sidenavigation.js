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

// Drop Down for Side Navigation
const setMarginValue = (idName, value) => {
  getElementById(idName).style.marginBottom = value;
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
const openFirstDropDown = () => {
  getElementById('myFirstDropdown').classList.toggle("show");
  
  const ranges = {
    "(max-width: 535px)": '790px',
    "(max-width: 450px)": '725px',
    "(max-width: 320px)": '770px',
  }
  let value = '740px'
  for (const range in ranges) {
    if (window.matchMedia(range).matches) {
      value = ranges[range]
      break
    }
  }
  setMarginValue('firstDropdown', value);

  window.matchMedia("(max-width: 535px), (max-width: 450px), (max-width: 320px)").addListener(event => {
    if(event.matches) {
      setMarginValue('firstDropdown', ranges[event.media])
    }
  });
}

const openSecondDropDown = () => {
  getElementById('mySecondDropdown').classList.toggle("show");
  
  const ranges = {
    "(max-width: 535px)": '835px',
    "(max-width: 450px)": '730px',
    "(max-width: 320px)": '840px',
  }
  let value = '730px'
  for (const range in ranges) {
    if (window.matchMedia(range).matches) {
      value = ranges[range]
      break
    }
  }
  setMarginValue('secondDropdown', value);

  window.matchMedia("(max-width: 535px), (max-width: 450px), (max-width: 320px)").addListener(event => {
    if(event.matches) {
      setMarginValue('secondDropdown', ranges[event.media])
    }
  });
}

const openThirdDropDown = () => {
  getElementById('myThirdDropdown').classList.toggle("show");
  
  const ranges = {
    "(max-width: 535px)": '640px',
    "(max-width: 450px)": '595px',
    "(max-width: 320px)": '640px',
  }
  let value = '590px'
  for (const range in ranges) {
    if (window.matchMedia(range).matches) {
      value = ranges[range]
      break
    }
  }
  setMarginValue('thirdDropdown', value);

  window.matchMedia("(max-width: 535px), (max-width: 450px), (max-width: 320px)").addListener(event => {
    if(event.matches) {
      setMarginValue('thirdDropdown', ranges[event.media])
    }
  });
}

const openFourthDropDown = () => {
  getElementById('myFourthDropdown').classList.toggle("show");
  
  const ranges = {
    "(max-width: 535px)": '335px',
    "(max-width: 450px)": '300px',
    "(max-width: 320px)": '330px',
  }
  let value = '315px'
  for (const range in ranges) {
    if (window.matchMedia(range).matches) {
      value = ranges[range]
      break
    }
  }
  setMarginValue('fourthDropdown', value);

  window.matchMedia("(max-width: 535px), (max-width: 450px), (max-width: 320px)").addListener(event => {
    if(event.matches) {
      setMarginValue('fourthDropdown', ranges[event.media])
    }
  });
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
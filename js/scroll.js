// Define the reveal function
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;

  reveals.forEach((reveal) => {
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 5;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}

// Add scroll event listener to call reveal function
window.addEventListener("scroll", reveal);

// Add resize event listener to call reveal function
window.addEventListener("resize", reveal);

// Call reveal initially to handle the initial view state
reveal();

/*

// Define the reveal function
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 5;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Function to manage the event listener
function manageEventListener() {
  var reveals = document.querySelectorAll(".reveal");

  if (window.matchMedia("(max-width: 700px)").matches) {
    // The viewport is less than, or equal to, 700 pixels wide
    // Add 'active' class to all '.reveal' elements and remove the scroll event listener
    reveals.forEach(function (reveal) {
      reveal.classList.add("active");
    });
    window.removeEventListener("scroll", reveal);
  } else {
    // The viewport is greater than 700 pixels wide
    // Add the scroll event listener
    window.addEventListener("scroll", reveal);
    // Call reveal immediately to handle initial state
    reveal();
  }
}

// Call manageEventListener immediately when the script loads
manageEventListener();

// Call manageEventListener on viewport resize
window.addEventListener("resize", manageEventListener);

// Call reveal initially to handle the initial view state
reveal();

*/

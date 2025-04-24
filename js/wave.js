// JavaScript-based Handwave Animation and Compass Spin Animation

// Add handwave animation function
function animateHandwave() {
  if (window.innerWidth >= 660) {
    // Ensure animation only shows on screens 660px and above
    const handwaveIcon = document.querySelector(".icon-wave");
    if (handwaveIcon) {
      handwaveIcon.classList.add("wave");
      setTimeout(() => {
        handwaveIcon.classList.remove("wave");
      }, 1000); // Assume the animation duration is 1 second
    }
  }
}

// Add compass spin animation function
function animateCompass() {
  const compassIcon = document.querySelector(".icon-compass");
  if (compassIcon) {
    compassIcon.classList.add("spin");
    setTimeout(() => {
      compassIcon.classList.remove("spin");
    }, 1500); // Assume the animation duration is 1.5 seconds
  }
}

// Play handwave animation on page load
window.addEventListener("load", () => {
  animateHandwave();
});

// Play handwave animation on hover
document.querySelectorAll(".icon-wave").forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    if (window.innerWidth >= 660) {
      // Ensure hover animation only shows on screens 660px and above
      icon.classList.add("wave");
      setTimeout(() => {
        icon.classList.remove("wave");
      }, 1000); // Assume the animation duration is 1 second
    }
  });
});

// Play compass spin animation on hover
document.querySelectorAll(".icon-compass").forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.classList.add("spin");
    setTimeout(() => {
      icon.classList.remove("spin");
    }, 1500); // Assume the animation duration is 1.5 seconds
  });
});

// Define the CSS animations using JavaScript
const style = document.createElement("style");
style.innerHTML = `
  @keyframes handwave {
    0% { transform: translateY(-.5rem) rotate(0deg); transform-origin: bottom; }
    20% { transform: translateY(-.5rem) rotate(14deg); transform-origin: bottom; }
    40% { transform: translateY(-.5rem) rotate(-8deg); transform-origin: bottom; }
    60% { transform: translateY(-.5rem) rotate(14deg); transform-origin: bottom; }
    80% { transform: translateY(-.5rem) rotate(-4deg); transform-origin: bottom; }
    100% { transform: translateY(-.5rem) rotate(0deg); transform-origin: bottom; }
  }

  .icon-wave.wave {
    animation: handwave 1s ease-in-out;
    display: inline-block;
  }

  @keyframes compassSpin {
    0% { transform: translateY(-.5rem) rotate(0deg); }
    25% { transform: translateY(-.5rem) rotate(90deg); }
    50% { transform: translateY(-.5rem) rotate(180deg); }
    75% { transform: translateY(-.5rem) rotate(270deg); }
    100% { transform: translateY(-.5rem) rotate(360deg); }
  }

  .icon-compass.spin {
    animation: compassSpin 1.5s ease-in-out;
    display: inline-block;
  }

  @media screen and (max-width: 1100px) {
    @keyframes handwave {
      0% { transform: translateY(-.5rem) rotate(0deg); transform-origin: bottom; }
      20% { transform: translateY(-.5rem) rotate(14deg); transform-origin: bottom; }
      40% { transform: translateY(-.5rem) rotate(-8deg); transform-origin: bottom; }
      60% { transform: translateY(-.5rem) rotate(14deg); transform-origin: bottom; }
      80% { transform: translateY(-.5rem) rotate(-4deg); transform-origin: bottom; }
      100% { transform: translateY(-.5rem) rotate(0deg); transform-origin: bottom; }
    }

    @keyframes compassSpin {
      0% { transform: translateY(-.5rem) rotate(0deg); }
      25% { transform: translateY(-.5rem) rotate(90deg); }
      50% { transform: translateY(-.5rem) rotate(180deg); }
      75% { transform: translateY(-.5rem) rotate(270deg); }
      100% { transform: translateY(-.5rem) rotate(360deg); }
    }
  }

  @media screen and (max-width: 800px) {
    @keyframes handwave {
      0% { transform: translateY(-.2rem) rotate(0deg); transform-origin: bottom; }
      20% { transform: translateY(-.2rem) rotate(14deg); transform-origin: bottom; }
      40% { transform: translateY(-.2rem) rotate(-8deg); transform-origin: bottom; }
      60% { transform: translateY(-.2rem) rotate(14deg); transform-origin: bottom; }
      80% { transform: translateY(-.2rem) rotate(-4deg); transform-origin: bottom; }
      100% { transform: translateY(-.2rem) rotate(0deg); transform-origin: bottom; }
    }

    @keyframes compassSpin {
      0% { transform: translateY(-.2rem) rotate(0deg); }
      25% { transform: translateY(-.2rem) rotate(90deg); }
      50% { transform: translateY(-.2rem) rotate(180deg); }
      75% { transform: translateY(-.2rem) rotate(270deg); }
      100% { transform: translateY(-.2rem) rotate(360deg); }
    }
  }
`;
document.head.appendChild(style);

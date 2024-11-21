const hamburgerToggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
  if (window.innerWidth > 900) return;
  hamburgerToggler.classList.toggle("open");

  const ariaToggler =
    hamburgerToggler.getAttribute("aria-expended") === "true"
      ? "false"
      : "true";
  hamburgerToggler.setAttribute("aria-expanded", ariaToggler);

  navLinksContainer.classList.toggle("open");

  document.body.classList.toggle("no-scroll");
};
hamburgerToggler.addEventListener("click", toggleNav);
navLinksContainer.addEventListener("click", toggleNav);

window.addEventListener("resize", function () {
  if (window.innerWidth > 900) {
    hamburgerToggler.classList.remove("open");
    navLinksContainer.classList.remove("open");
  }
});

new ResizeObserver((entries) => {
  if (entries[0].contentRect.width <= 900) {
    navLinksContainer.style.transition = "transform .2s ease-out";
  } else {
    navLinksContainer.style.transition = "none";
  }
}).observe(document.body);

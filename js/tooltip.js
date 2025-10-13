const tagItems = document.querySelectorAll(".tag-item, .side-projects-cards a");
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
document.body.appendChild(tooltip);

function isScreenLargeEnough() {
  return window.innerWidth > 660;
}

function handleMouseEnter(e) {
  if (!isScreenLargeEnough()) return;
  const tooltipText = e.target.getAttribute("data-tooltip");
  tooltip.textContent = tooltipText;
  tooltip.style.display = "block";
}

function handleMouseMove(e) {
  if (!isScreenLargeEnough()) return;
  tooltip.style.top = `${e.clientY + 15}px`;
  tooltip.style.left = `${e.clientX + 15}px`;
}

function handleMouseLeave() {
  if (!isScreenLargeEnough()) return;
  tooltip.style.display = "none";
}

tagItems.forEach((tag) => {
  tag.addEventListener("mouseenter", handleMouseEnter);
  tag.addEventListener("mousemove", handleMouseMove);
  tag.addEventListener("mouseleave", handleMouseLeave);
});

window.addEventListener("resize", () => {
  if (!isScreenLargeEnough()) {
    tooltip.style.display = "none";
  }
});

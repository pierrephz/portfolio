const tagItems = document.querySelectorAll(".tag-item");
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
document.body.appendChild(tooltip);

tagItems.forEach((tag) => {
  tag.addEventListener("mouseenter", (e) => {
    const tooltipText = tag.getAttribute("data-tooltip");
    tooltip.textContent = tooltipText;
    tooltip.style.display = "block";
  });

  tag.addEventListener("mousemove", (e) => {
    tooltip.style.top = `${e.clientY + 15}px`;
    tooltip.style.left = `${e.clientX + 15}px`;
  });

  tag.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
});

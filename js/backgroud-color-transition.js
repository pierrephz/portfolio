let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let bgColor = entry.target.getAttribute("data-bg-color");
        let textColor = entry.target.getAttribute("data-text-color");
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = textColor;
      }
    });
  },
  { threshold: [0.5] }
);

document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});

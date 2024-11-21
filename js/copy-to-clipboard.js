document
  .getElementById("contact-card")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const email = "pierre.philouze@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      const tooltip = document.getElementById("tooltip-copy");
      tooltip.style.opacity = "1";
      tooltip.style.display = "block";
      setTimeout(() => {
        tooltip.style.opacity = "0";
        setTimeout(() => {
          tooltip.style.display = "none";
        }, 300);
      }, 3000);
    });
  });

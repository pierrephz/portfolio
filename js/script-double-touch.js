// Check if the device is a touch device
if ("ontouchstart" in window || navigator.maxTouchPoints) {
  // Add the `no-hover` class to the `body` tag
  document.body.classList.add("no-hover");
}

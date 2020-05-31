"use strict";

(function () {
  const container = document.querySelector(".container-demo");

  // Event Listener
  document
    .querySelector(".updateDOM")
    .addEventListener("click", () => (container.innerHTML = "Hello from JS"));
})();

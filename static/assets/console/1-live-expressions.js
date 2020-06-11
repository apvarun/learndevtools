"use strict";

(function () {
  window.CustomValue = "Initial Value";
  let interval = null;

  const clear = () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  };

  document.querySelector(".change").addEventListener("click", () => {
    clear();
    interval = setInterval(
      () => (window.CustomValue = new Date().getTime()),
      250
    );
  });

  document.querySelector(".stopChange").addEventListener("click", clear);
})();

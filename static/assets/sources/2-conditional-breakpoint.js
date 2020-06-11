"use strict";

(function () {
  // Static array to access data
  const staticData = [...Array(50).fill(0)];
  let index = 0,
    interval;

  ////////////////////////////////////////////////
  // Processng function
  function dataProcessor(input) {
    let value;
    try {
      // Some processing
      value = staticData[input];
      value += Math.random(100);

      if (!value) throw new Error();
    } catch (e) {
      // Stop Loop
      if (interval) clearInterval(interval);
      // Throw error
      document.querySelector(".error").classList.remove("hide");
      throw new Error("Array Index Out Of Bound: " + input);
    }
    document.querySelector(".error").classList.add("hide");
    return value;
  }
  ////////////////////////////////////////////////

  // Event Listener
  document.querySelector(".process").addEventListener("click", () => {
    interval = setInterval(() => {
      dataProcessor(index);
      index++;
    }, 500);
  });
})();

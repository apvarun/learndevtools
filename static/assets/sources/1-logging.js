"use strict";

(function () {
  const RANDOM_SIZE = 1000;
  const container = document.getElementById("container");

  // Processng function
  function randomGenerator() {
    let value;

    // Add logpoint below to log the generated values here
    ////////////////////////////////////////////////

    const value_1 = Math.random() * RANDOM_SIZE;
    const value_2 = Math.random() * RANDOM_SIZE;

    // Make calculation
    value = value_1 + value_2;

    // return output
    return Math.round(value);
  }

  // Event Listener
  document.querySelector(".encrypt").addEventListener("click", () => {
    const randomValue = randomGenerator();

    // Do something using `randomValue`
    container.innerText = randomValue;
  });
})();

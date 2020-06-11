"use strict";

(function () {
  // Constants
  const URLS = ["/assets/demo.json", "/assets/demo-not-found.json"];
  const container = document.querySelector(".container-demo");
  let count = true;

  ////////////////////////////////////////////////
  // Processng function
  function triggerFetch() {
    container.innerText = "Fetching Data";
    count = !count;

    fetch(URLS[count ? 0 : 1])
      .then((response) => {
        return response.json();
      })
      .then(() => {
        container.innerText = "Fetch Successful";
      })
      .catch(() => {
        container.innerText = "Fetch Failed";
      });
  }
  ////////////////////////////////////////////////

  // Event Listener
  document
    .querySelector(".triggerFetch")
    .addEventListener("click", triggerFetch);
})();

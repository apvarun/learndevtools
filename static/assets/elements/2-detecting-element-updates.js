// Event Listeners
(function () {
  const container = document.querySelector(".container-demo");

  document
    .querySelector(".changeAttr")
    .addEventListener("click", () => container.setAttribute("now", new Date()));

  document.querySelector(".changeTree").addEventListener("click", () => {
    [...Array(4)].map((val, index) => {
      const div = document.createElement("div");
      div.innerText = index;
      container.appendChild(div);
    });
  });

  document.querySelector(".removeElt").addEventListener("click", () => {
    try {
      container.removeChild(
        document.querySelector(".container-demo div:first-child")
      );
    } catch {
      console.warn(
        "No elements inside container. Update subtree to add elements."
      );
    }
  });
})();

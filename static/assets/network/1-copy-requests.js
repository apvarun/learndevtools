"use strict";

(function () {
  document.querySelector(".trigger-api").addEventListener("click", async () =>
    await fetch("http://echo.jsontest.com/key/value")
      .then((response) => response.json())
      .then((json) => console.log(json))
  );
})();

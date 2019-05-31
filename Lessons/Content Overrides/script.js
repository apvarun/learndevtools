"use strict";

(function(){
  const container = document.getElementById('container');

  // Event Listener
  document.getElementById('updateDOM').addEventListener(
    'click',
    () => container.innerHTML = 'Hello from JS'
  )
})();

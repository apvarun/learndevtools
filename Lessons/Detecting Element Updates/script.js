// Event Listeners
(function(){
  const container = document.getElementById('container');
  document.getElementById('changeAttr').addEventListener(
    'click',
    () => container.setAttribute('now', new Date())
  )
  document.getElementById('changeTree').addEventListener(
    'click',
    () => {
      [...Array(4)].map((val, index) => {
        const span = document.createElement('span');
        span.innerText = index;
        container.appendChild(span);
      })
    }
  )
  document.getElementById('removeElt').addEventListener(
    'click',
    () => {
      try {
        container.removeChild(document.querySelector('#container span:first-child'))
      } catch {
        console.warn("No elements inside container. Update subtree to add elements.")
      }
    }
  )
})();

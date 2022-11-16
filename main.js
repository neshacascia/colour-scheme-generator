document
  .querySelector('#get-colour-scheme')
  .addEventListener('click', getColourScheme);

function getColourScheme() {
  let colour = document
    .querySelector('#colour-picker')
    .value.slice(1)
    .toUpperCase();
  let colourScheme = document.querySelector('#colour-scheme').value;
  let baseURL = 'https://www.thecolorapi.com/scheme';

  fetch(`${baseURL}?hex=${colour}&mode=${colourScheme}`)
    .then(response => response.json())
    .then(results => {
      for (let i = 0; i < 5; i++) {
        document.querySelector(`#colour-${i}`).style.background =
          results.colors[i].hex.value;
        document.querySelector(`#hex-value-${i}`).textContent =
          results.colors[i].hex.value;
      }
    });
}

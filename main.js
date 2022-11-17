document
  .querySelector('#get-colour-scheme')
  .addEventListener('click', getColourScheme);

async function getColourScheme() {
  let colour = document
    .querySelector('#colour-picker')
    .value.slice(1)
    .toUpperCase();
  let colourScheme = document.querySelector('#colour-scheme').value;
  let baseURL = 'https://www.thecolorapi.com/scheme';

  const response = await fetch(`${baseURL}?hex=${colour}&mode=${colourScheme}`);
  try {
    if (response.ok) {
      const results = await response.json();
      for (let i = 0; i < 5; i++) {
        document.querySelector(`#colour-${i}`).style.background =
          results.colors[i].hex.value;
        document.querySelector(`#hex-value-${i}`).textContent =
          results.colors[i].hex.value;
      }
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
}

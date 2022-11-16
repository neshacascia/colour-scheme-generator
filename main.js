document
  .querySelector('#get-colour-scheme')
  .addEventListener('click', getColourScheme);

function getColourScheme() {
  let colour = document
    .querySelector('#colour-picker')
    .value.slice(1)
    .toUpperCase();
  let colourHarmony = document.querySelector('#colour-harmony').value;
  let colourSchemesArray = [];
  let baseURL = 'https://www.thecolorapi.com/scheme';

  const colourOne = document.querySelector('#colour-hex-one');
  const colourTwo = document.querySelector('#colour-hex-two');
  const colourThree = document.querySelector('#colour-hex-three');
  const colourFour = document.querySelector('#colour-hex-four');
  const colourFive = document.querySelector('#colour-hex-five');

  const colourOneText = document.querySelector('#colour-text-one');
  const colourTwoText = document.querySelector('#colour-text-two');
  const colourThreeText = document.querySelector('#colour-text-three');
  const colourFourText = document.querySelector('#colour-text-four');
  const colourFiveText = document.querySelector('#colour-text-five');
  console.log(colourHarmony);

  fetch(`${baseURL}?hex=${colour}&mode=${colourHarmony}`)
    .then(response => response.json())
    .then(results => {
      for (let colour of results.colors) {
        colourSchemesArray.push(colour.hex.value);
      }
      console.log(colourSchemesArray[0]);

      colourOne.style.background = `${colourSchemesArray[0]}`;
      colourTwo.style.background = `${colourSchemesArray[1]}`;
      colourThree.style.background = `${colourSchemesArray[2]}`;
      colourFour.style.background = `${colourSchemesArray[3]}`;
      colourFive.style.background = `${colourSchemesArray[4]}`;

      colourOneText.innerHTML = colourSchemesArray[0];
      colourTwoText.innerHTML = colourSchemesArray[1];
      colourThreeText.innerHTML = colourSchemesArray[2];
      colourFourText.innerHTML = colourSchemesArray[3];
      colourFiveText.innerHTML = colourSchemesArray[4];
    });
}

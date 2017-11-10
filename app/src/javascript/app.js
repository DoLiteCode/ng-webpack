/*jshint esversion: 6 */

import '../css/main.css';
import '../css/input-elements.css';

import '../sass/main.scss';

import { secretParagraph, secretButton } from './dom-loader';
import { RandomGenerator } from './random-generator';


var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();

function toggleSecretState() {
  showSecret = !showSecret;
  updateSecretParagraph();
  updateSecretButton();
}

function updateSecretButton() {
  if (showSecret) {
    secretButton.textContent = 'Hide the Secret';
  } else {
    secretButton.textContent = 'Show the Secret';
  }
}

function updateSecretParagraph() {
  if (showSecret) {
    secretParagraph.style.display = 'block';
  } else {
    secretParagraph.style.display = 'none';
  }
}






const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomInt = () => {
  outputParagraph.textContent = RandomGenerator.randomInteger();
};

const outputRandomRange = () => {
  outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
};

const buttonRndInt = document.querySelector('#randomInt');
const buttonRndRange = document.querySelector('#randomRange');

buttonRndInt.addEventListener('click', outputRandomInt);
buttonRndRange.addEventListener('click', outputRandomRange);
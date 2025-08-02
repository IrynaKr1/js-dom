const BTN_COLORS = ['#FF5722', '#4CAF50', '#9C27B0', '#FF9800', '#2196F3'];
const RAND_TEXT = [
  'This is a new text!',
  'The true is a lie',
  'I like cofee and muffins',
  'New button text is so long!',
];

const [textButton, colorButton, allButton, nextButton] =
  document.querySelectorAll('.btn');
const img = document.querySelector('img');

img.src =
  'https://cdn.pixabay.com/photo/2015/04/22/12/02/butterfly-734654_1280.jpg';
img.alt = 'Butterfly on a grass';

function changeText() {
  const randomText = RAND_TEXT[Math.floor(Math.random() * RAND_TEXT.length)];
  this.textContent = randomText;
  console.log(`Text of the id '${this.id}' button nase been changed`);
}

function changeColor() {
  const randomColor = BTN_COLORS[Math.floor(Math.random() * BTN_COLORS.length)];
  this.style.backgroundColor = randomColor;
  console.log(`Button color changed to: ${randomColor}`);
}

function addBothFunctions(button) {
  button.addEventListener('click', changeText);
  button.addEventListener('click', changeColor);
}

function changeImg() {
    img.src = 'https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_960_720.jpg';
    img.alt = 'Sunset on the beach';
}

textButton.addEventListener('click', changeText);
colorButton.addEventListener('click', changeColor);
allButton.addEventListener('click', addBothFunctions(allButton));

img.addEventListener('mouseenter', changeImg);

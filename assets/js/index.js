const BTN_COLORS = ['#FF5722', '#4CAF50', '#9C27B0', '#FF9800', '#2196F3'];
const RAND_TEXT = [
  'This is a new text!',
  'The true is a lie',
  'I like cofee and muffins',
  'New button text is so long!',
];

/**
 * PageImg class manage default and hover states for image element
 * @class PageImg
 */

class PageImg {
  /**
   * Creates an instance of PageImg with predefined default and hover images.
   * @constructor
   * @memberof PageImg
   * @property {string} src = URL of the image
   * @property {string} alt = Alt text for accessibility
   */
  constructor() {
    this.defaultImg = {
      src: 'https://cdn.pixabay.com/photo/2015/04/22/12/02/butterfly-734654_1280.jpg',
      alt: 'Butterfly on a grass',
    };
    this.hoverImg = {
      src: 'https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_960_720.jpg',
      alt: 'Sunset on the beach',
    };
  }

  imageHover(imgElement) {
    imgElement.src = this.hoverImg.src;
    imgElement.alt = this.hoverImg.alt;
  }
  imageToDefault(imgElement) {
    imgElement.src = this.defaultImg.src;
    imgElement.alt = this.defaultImg.alt;
  }
}

const [textButton, colorButton, allButton, nextButton] =
  document.querySelectorAll('.btn');
const img = document.querySelector('img');
const pageImg = new PageImg();

img.src = pageImg.defaultImg.src;
img.alt = pageImg.defaultImg.alt;

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
  pageImg.imageHover(img);
}

function resetImg() {
  pageImg.imageToDefault(img);
}

function nextPage() {
  window.open('user-card.html', '_blank');
}

textButton.addEventListener('click', changeText);
colorButton.addEventListener('click', changeColor);
addBothFunctions(allButton);
nextButton.addEventListener('click', nextPage);

img.addEventListener('mouseenter', changeImg);
img.addEventListener('mouseleave', resetImg);

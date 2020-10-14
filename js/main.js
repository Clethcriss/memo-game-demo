import * as first from '../img/1.png';
import * as second from '../img/2.png';
import * as third from '../img/3.png';
import * as fourth from '../img/4.png';
import * as fifth from '../img/5.png';
import * as sixth from '../img/6.png';
import * as seventh from '../img/7.png';
import * as eighth from '../img/8.png';

const gridContainer = document.querySelector('.grid-container');
const images = [];
const imageSources = [
  first, second, third, fourth, fifth, sixth, seventh, eighth
];

for (let i = 0; i < 8; i++) {
  const image = document.createElement('img');
  const image2 = document.createElement('img');
  image.src = imageSources[i]?.default;
  image2.src = imageSources[i]?.default;
  images.push(image);
  images.push(image2);
}

for (let i = 0; i < 16; i++) {
  const gridItem = document.createElement('div');
  const card = document.createElement('div');
  const front = document.createElement('div');
  const back = document.createElement('div');

  front.classList.add('front');
  back.classList.add('back');
  card.classList.add('card');
  gridItem.classList.add('grid-item');

  front.appendChild(images[i]);
  console.log('images[i]: ', images[i]);
  card.appendChild(front);
  console.log('front: ', front);
  card.appendChild(back);
  gridItem.appendChild(card);

  gridContainer.appendChild(gridItem);
}

const cards = document.querySelectorAll('.grid-item');

for (let card of cards) {
  card.addEventListener('click', (e) => {
    const elem = e.currentTarget;
    const flipped = elem.classList.contains('flipped');
    if (flipped) {
      elem.classList.remove('flipped');
    } else {
      elem.classList.add('flipped');
    }
  });
}

const adText = document.querySelector('.adText');

adText.addEventListener('click', () => {
  const fakeAnchor = document.createElement('a');
  fakeAnchor.href = 'https://www.streetkitchen.hu';

  document.body.appendChild(fakeAnchor);
  fakeAnchor.click();
  document.body.removeChild(fakeAnchor);
})

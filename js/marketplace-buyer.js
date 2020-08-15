import api from './url.js';
import {setScore, prodCatsListener, setProducts} from './global.js';

const score = sessionStorage.getItem('score');
const scorespan = document.querySelector('p.score span:first-child');
const sortSel = document.querySelector('#sort');

if(score){
  scorespan.textContent = score;
}

prodCatsListener();

setProducts();

sortSel.addEventListener('change', () => setProducts());

// Product page

const plus = document.querySelector('.plusminus #plus');
const minus = document.querySelector('.plusminus #minus');
const qt = document.querySelector('.plusminus input');

plus.addEventListener('click', () => {
  qt.value = parseInt(qt.value) + 1;
});

minus.addEventListener('click', () => {
  if(qt.value > 0){
    qt.value = parseInt(qt.value) - 1;
  }
});
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
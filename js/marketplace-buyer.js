import api from './url.js';
import {setScore, prodCatsListener} from './global.js';

const score = sessionStorage.getItem('score');
const scorespan = document.querySelector('p.score span:first-child');

if(score){
  scorespan.textContent = score;
}

prodCatsListener();
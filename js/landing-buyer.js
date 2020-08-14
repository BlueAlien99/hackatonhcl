import api from './url.js';
import {setScore, prodCatsListener} from './global.js';

const scorespan = document.querySelector('p.score span:first-child');
const improveBtn = document.querySelector('.improve');
const dlpdfBtn = document.querySelector('#dlpdf');

const reason1 = document.querySelector('#reason1');
const reason2 = document.querySelector('#reason2');

setScore(scorespan).then(d => setReasons(d));

dlpdfBtn.addEventListener('click', () => downloadReport());

improveBtn.addEventListener('click', () => window.location = './marketplace-buyer.html');

function setReasons(scores){
  const reasons = [
    {reason: 'cleanliness', score: scores.cleanliness},
    {reason: 'consumables', score: scores.consumables},
    {reason: 'endorsement', score: scores.endorsement},
    {reason: 'equipment', score: scores.equipment},
    {reason: 'service', score: scores.service}
  ];

  reasons.sort((a, b) => a.score - b.score);
  reason1.textContent = reasons[0].reason;
  reason2.textContent = reasons[1].reason;

  sessionStorage.setItem('reason1', reasons[0].reason);
  sessionStorage.setItem('reason2', reasons[1].reason);
}

function downloadReport(){
  const anchor = document.createElement('a');
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  anchor.href = `${api}/pdf_report`;
  anchor.click();
}
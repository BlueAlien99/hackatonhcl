import api from './url.js';
import {setScore, prodCatsListener} from './global.js';

const scorespan = document.querySelector('p.score span:first-child');
const improveBtn = document.querySelector('.improve');
const dlpdfBtn = document.querySelector('#dlpdf');

const reason1span = document.querySelector('#reason1');
const reason2span = document.querySelector('#reason2');

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
  const reasonsFl = reasons.filter(r => r.score > 0);

  let reason1 = reasonsFl[0] ? reasonsFl[0].reason : '';
  let reason2 = reasonsFl[1] ? reasonsFl[1].reason : '';

  reason1span.textContent = reason1;
  reason2span.textContent = reason2;

  if(!reason2){
    reason2span.parentElement.style.display = 'none';
  }

  sessionStorage.setItem('reason1', reason1);
  sessionStorage.setItem('reason2', reason2);
}

function downloadReport(){
  const anchor = document.createElement('a');
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  anchor.href = `${api}/pdf_report2`;
  anchor.click();
}
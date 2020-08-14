import api from './url.js';

const locid = sessionStorage.getItem('locid');

export async function setScore(span){

  const response = await fetch(api + `/opinion/location_id/${locid}`);
  
  let json;
  if(response.ok){
    json = await response.json();
  } else{
    console.error('setScore fetch unsuccessful :(');
    return;
  }

  sessionStorage.setItem('score', json.score);
  span.textContent = json.score;
  return json;
}

export function setProducts(){

}

export function prodCatsListener(){
  const cats = document.querySelectorAll('.cat-sel[data-cat]');
  cats.forEach(c => {
    c.addEventListener('click', e => e.currentTarget.classList.toggle('cat-selected'));
  });
}
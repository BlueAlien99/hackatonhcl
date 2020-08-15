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

export async function setProducts(){
  const showcase = document.querySelector('.prod-scroll-inner');
  const sortSel = document.querySelector('#sort');
  const sortType = sortSel ? sortSel.value : '';

  let cats = document.querySelectorAll('.cat-sel[data-cat]');
  cats = Array.from(cats).filter(c => c.classList.contains('cat-selected'));

  const products = [];

  await Promise.all(cats.map(async cat => {
    let prods = await fetch(api + `/product/find/${cat.getAttribute('data-cat')}`);
    prods = await prods.json();
    products.push(...prods);
  }));

  let html = '';

  switch(sortType){
    case 'expensive':
      products.sort((a, b) => b.price - a.price);
      break;
    case 'available':
      products.sort((a, b) => b.quantity - a.quantity);
      break;
    default:
      products.sort((a, b) => a.price - b.price);
  }

  products.forEach(p => {
    html += `
      <div class="product" data-prodid="${p.id}">
        <img src="${api}/image/get/${p.type}/${p.fileName}">
        <p>${p.name}, ${p.description.substring(0, 64)}</p>
        <p>${p.price.toFixed(2)}$/piece</p>
        <a onclick="openProduct(this)">more <img src="images/arrow.png"></a>
      </div>
    `;
  });

  showcase.innerHTML = html;
}

export function prodCatsListener(){
  const cats = document.querySelectorAll('.cat-sel[data-cat]');
  cats.forEach(c => {
    c.addEventListener('click', e => {
      e.currentTarget.classList.toggle('cat-selected');
      setProducts();
    });
  });
}
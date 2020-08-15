// I should use import from url.js, but then it doesn't work.
// It's 0320 at night and I don't really have time to think about a better solution.
const api = 'https://stay-safe-spring-spring-cloud-app.azuremicroservices.io';

const products = document.querySelector('.products');
const productCard = document.querySelector('.product-card');

async function openProduct(el){
  const productId = el.parentElement.getAttribute('data-prodid');
  let data = await fetch(api + `/product/${productId}`);
  data = await data.json();

  const prodImg = productCard.querySelector('.prod-img img');
  const prodName = productCard.querySelector('.price-and-description h3');
  const prodPrice = productCard.querySelector('.price-and-description #prod-price');

  prodImg.src = `${api}/image/get/${data.type}/${data.fileName}`;
  prodName.textContent = `${data.name}, ${data.description}`;
  prodPrice.textContent = data.price.toFixed(2);

  const qt = document.querySelector('.plusminus input');
  qt.value = 1;

  products.style.display = 'none';
  productCard.style.display = 'block';
}

function closeProduct(){
  productCard.style.display = 'none';
  products.style.display = 'block';
}
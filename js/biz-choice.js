import api from './url.js';

const input = document.querySelector('#searchinput');
const submit = document.querySelector('#search');

const locations = document.querySelector('#locations');
const rcol = document.querySelector('.rcol');

function getLocations(){
  fetch(api + '/location/all')
    .then(d => d.json())
    .then(d => {
      const kw = input.value;
      let html = '';
      d.forEach(e => {
        if(e.name.includes(kw) || e.address.includes(kw)){
          rcol.style.display = 'block';
          html += `
            <button class="btn-light" data-userkey="${e.user_key}">${e.name}<br>${e.address}</button>
          `;
        }
      });
      locations.innerHTML = html;
      addListeners();
    });
}

function addListeners(){
  const locs = document.querySelectorAll('button[data-userkey]');
  locs.forEach(l => {
    l.addEventListener('click', e => gotoLanding(e));
  })
}

function gotoLanding(e){
  const userkey = e.target.getAttribute('data-userkey');
  sessionStorage.setItem('userkey', userkey);
  window.location.href = './landing-buyer.html';
}

input.addEventListener('keydown', e => {
  if(e.key === "Enter"){
    getLocations();
  }
});

submit.addEventListener('click', () => getLocations());
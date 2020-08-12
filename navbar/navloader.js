function loadNavbar(path, selectedItem = 0, replace = '', alt = ''){
  const head = document.querySelector('head');
  const body = document.querySelector('body');

  fetch(alt ? `${path}/${alt}` : `${path}/navbar.html`)
    .then(d => d.text())
    .then(d => {
      const docFrag = document.createElement('template');
      docFrag.innerHTML = d;

      const logo = docFrag.content.querySelector('.logo img');
      logo.src = `${path}/logo.svg`;

      if(selectedItem > 0){
        const navlinks = docFrag.content.querySelectorAll('.nav-link');
        navlinks[selectedItem - 1].classList.add('nav-active');
        if(replace){
          navlinks[selectedItem - 1].querySelector('a').textContent = replace;
        }
      }

      body.prepend(docFrag.content);
    });

  const css = `<link rel="stylesheet" href="${path}/style.css">`;
  head.insertAdjacentHTML('beforeend', css);
}
function loadNavbar(path, selectedItem){
  const head = document.querySelector('head');
  const body = document.querySelector('body');

  fetch(`${path}/navbar.html`)
    .then(d => d.text())
    .then(d => {
      const docFrag = document.createElement('template');
      docFrag.innerHTML = d;

      const logo = docFrag.content.querySelector('.logo img');
      logo.src = `${path}/logo.svg`;

      if(selectedItem > 0){
        const navlinks = docFrag.content.querySelectorAll('.nav-link');
        navlinks[selectedItem - 1].classList.add('nav-active');
      }

      body.prepend(docFrag.content);
    });

  const css = `<link rel="stylesheet" href="${path}/style.css">`;
  head.insertAdjacentHTML('beforeend', css);
}
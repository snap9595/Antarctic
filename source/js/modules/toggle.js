let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.header__toggle');
let map = document.querySelector('.about-us__map');
let logo = document.querySelector('.header__logo');
let links = navMain.querySelectorAll('.nav__link');
let overlay = document.querySelector('.header__overlay');

const initToggle = () => {
  navMain.classList.remove('is-nojs');
  navToggle.classList.remove('is-nojs');
  map.classList.remove('is-nojs');
  logo.classList.remove('is-nojs');

  navToggle.addEventListener('click', function () {
    toggleMenu();
  });

  if (links.length > 0) {
    links.forEach((element) => {
      element.addEventListener('click', function () {
        toggleMenu();
      });
    });
  }

  overlay.addEventListener('click', function () {
    toggleMenu();
  });

  function toggleMenu() {
    if (navMain.classList.contains('is-open')) {
      navMain.classList.remove('is-open');
      navToggle.classList.remove('is-open');
      logo.classList.remove('is-blue');
      document.body.classList.remove('is-lock');
    } else {
      navMain.classList.add('is-open');
      navToggle.classList.add('is-open');
      logo.classList.add('is-blue');
      document.body.classList.add('is-lock');
    }
  }
};

export {initToggle};

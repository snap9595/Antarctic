let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.header__toggle');
let map = document.querySelector('.about-us__map');
let logo = document.querySelector('.header__logo');
let links = navMain.querySelectorAll('.nav__link');
let overlay = document.querySelector('.header__overlay');
let headerWrap = document.querySelector('.header__wrap');
let telInput = document.querySelectorAll('input[type="tel"]');
let wrapper = document.querySelector('.wrapper');

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
    navMain.classList.toggle('is-open');
    navToggle.classList.toggle('is-open');
    logo.classList.toggle('is-blue');
    wrapper.classList.toggle('is-lock');
    headerWrap.classList.toggle('is-open');
    if (navMain.classList.contains('is-open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  for (let i = 0; i < telInput.length; i++) {
    telInput[i].oninput = function () {
      initNumber(this);
    };
  }

  function initNumber(input) {
    let value = input.value;
    let re = /[^0-9\-\(\)\+\ ]/gi;
    if (re.test(value)) {
      value = value.replace(re, '');
      input.value = value;
    }
  }
};

export {initToggle};

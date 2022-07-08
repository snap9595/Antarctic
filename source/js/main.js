import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.header__toggle');
let map = document.querySelector('.about-us__map');


window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------


  navMain.classList.remove('nav--nojs');
  navToggle.classList.remove('header__toggle--nojs');
  map.classList.remove('about-us__map--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('nav--opened')) {
      navMain.classList.add('nav--closed');
      navMain.classList.remove('nav--opened');
      navToggle.classList.add('page-header__toggle--closed');
      navToggle.classList.remove('page-header__toggle--opened');
    } else {
      navMain.classList.remove('nav--closed');
      navMain.classList.add('nav--opened');
      navToggle.classList.remove('page-header__toggle--closed');
      navToggle.classList.add('page-header__toggle--opened');
    }
  });


  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

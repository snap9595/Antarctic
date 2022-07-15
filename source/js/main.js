import {iosVhFix} from './utils/ios-vh-fix';
import {initToggle} from './modules/toggle';


window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  window.addEventListener('load', () => {
    initToggle();
  });
});

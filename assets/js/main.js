import { finishedWorks, showAdditionalWorks } from './modules/finished-works.js';
import { stateOfWorkIndicator } from './modules/state-of-works-indicator.js';
import { slideshow } from './modules/slideshow.js';

/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', function() {
  hljs.highlightAll();
  finishedWorks();
  stateOfWorkIndicator();
  slideshow();
});
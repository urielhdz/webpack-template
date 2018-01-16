import '../css/app.scss';
require('./scroll.js');
require('./scrollIt.js');
import Slider from './slider';
import checker from './checkNetwork'

if(navigator.serviceWorker)
  navigator.serviceWorker.register('/sw.js');

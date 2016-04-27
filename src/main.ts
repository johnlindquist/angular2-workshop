import 'angular2/bundles/angular2-polyfills.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'font-awesome/fonts/fontawesome-webfont.woff2';


import {bootstrap} from 'angular2/platform/browser';
import {App} from './app';

bootstrap(App)
  .then(()=> console.log(`App Running...`))
  .catch(err => console.log(err));

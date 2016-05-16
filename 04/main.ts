import '@angular/bundles/@angular-polyfills.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'font-awesome/fonts/fontawesome-webfont.woff2';


import {bootstrap} from '@angular/platform-browser-dynamic';
import {App} from './app';

bootstrap(App)
  .then(()=> console.log(`App Running...`))
  .catch(err => console.log(err));

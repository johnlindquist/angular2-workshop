import {Component} from 'angular2/core';
import {Home} from './components/home';
import {HTTP_PROVIDERS} from 'angular2/http';
@Component({
  selector: 'app',
  directives: [Home],
  providers: [HTTP_PROVIDERS],
  template: `<div class="container">
  <i class="fa fa-star" aria-hidden="true"></i>
  <span>Hello World!</span>
  <i class="fa fa-star" aria-hidden="true"></i>

  <home></home>
</div>
`
})
export class App{}

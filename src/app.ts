import {Component} from 'angular2/core';
import {Home} from './components/home';
@Component({
  selector: 'app',
  directives: [Home],
  template: `<div class="container">
  <i class="fa fa-star" aria-hidden="true"></i>
  <span>Hello World!</span>
  <i class="fa fa-star" aria-hidden="true"></i>

  <home></home>
</div>
`
})
export class App{}

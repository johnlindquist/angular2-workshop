import {Component} from '@angular/core';
import {Home} from './components/home';
@Component({
  selector: 'app',
  directives: [Home],
  template: `
    <i class="fa fa-star" aria-hidden="true"></i>
    <span>Hello World!</span>
    <i class="fa fa-star" aria-hidden="true"></i>
    
    <home></home>
`
})
export class App{}

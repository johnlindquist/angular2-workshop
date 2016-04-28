import {Component} from 'angular2/core';
import {Home} from './components/home';
import {HTTP_PROVIDERS} from 'angular2/http';
@Component({
  selector: 'app',
  directives: [Home],
  providers: [HTTP_PROVIDERS],
  template: `<div class="container">
  <home></home>
</div>
`
})
export class App{}

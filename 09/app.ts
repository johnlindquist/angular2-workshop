import {Component} from '@angular/core';
import {Home} from './components/home';
import {HTTP_PROVIDERS} from '@angular/http';
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

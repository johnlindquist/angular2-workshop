import {Component} from 'angular2/core';
import {Home} from './components/home';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {Party} from './components/party';

@Component({
  selector: 'app',
  directives: [RouterOutlet, RouterLink],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS],
  template: `<style>
.router-link-active{
  color: #55595c;
  background-color: #fff;
  border-color: #ddd #ddd transparent;
}
</style>
<div class="container">
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a [routerLink]="['Home']" class="nav-link">Home</a>
    </li>
    <li class="nav-item">
      <a [routerLink]="['Party']" class="nav-link">Party</a>
    </li>
  </ul>
  <router-outlet></router-outlet>
</div>
`
})
@RouteConfig([
  {path: '/home', name: 'Home', component: Home, useAsDefault: true},
  {path: '/party', name: 'Party', component: Party},
  {path: '/**', redirectTo: ['Home'] }
])
export class App {
}

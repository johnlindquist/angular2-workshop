import {Component} from '@angular/core';
import {Home} from './components/home';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS, RouteConfig, RouterOutlet, RouterLink} from '@angular/router';
import {Party} from './components/party';
import {PartyService} from './services/party';

@Component({
  selector: 'app',
  directives: [RouterOutlet, RouterLink],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, PartyService],
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
      <a [routerLink]="['Party']" class="nav-link">Party ({{party.total}})</a>
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
  constructor(public party:PartyService){}
}

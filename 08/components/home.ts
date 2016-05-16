import {Component} from '@angular/core';
import {PersonList} from './person-list';
import {StarWars} from '../services/starwars';

@Component({
  selector: 'home',
  directives: [PersonList],
  providers: [StarWars],
  template: `
    <i class="fa fa-home" aria-hidden="true"></i>
    <span>I'm the home template</span>
    <i class="fa fa-home" aria-hidden="true"></i>
    
    <hr>
    
    <person-list (select)="onSelect($event)" [people]="starWars.people | async"></person-list>
`
})
export class Home{

  constructor(public starWars:StarWars){}

  onSelect(person){
    console.log(person);
  }
}

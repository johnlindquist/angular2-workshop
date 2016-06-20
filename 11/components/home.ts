import {Component} from '@angular/core';
import {PersonList} from './person-list';
import {StarWars} from '../services/starwars';
import {PartyService} from '../services/party';
import {Party} from './party';
import {RouteConfig, RouterOutlet} from '@angular/router-deprecated';

@Component({
  selector: 'home',
  directives: [PersonList, RouterOutlet],
  providers: [StarWars],
  template: `
    <person-list 
      (select)="onSelect($event)" 
      [people]="starWars.people | async"
      >
    </person-list>
`
})
export class Home{

  constructor(public starWars:StarWars, public party:PartyService){}

  onSelect(person){
    console.log('onSelect');
    this.party.addAttendee(person);
  }
}

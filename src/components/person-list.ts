import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Card} from './card';
import {Search} from '../pipes/search';

@Component({
  selector: 'person-list',
  directives: [Card],
  pipes:[Search],
  template: `<style>
  .person {
    cursor: pointer;
    cursor: hand;
  }
  .card-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

<input [(ngModel)]="name" type="text">

<div class="card-container">
  <card
    *ngFor="#person of people | search:'name':name"
    [person]="person">
  </card>
</div>
`
})
export class PersonList{
  @Input() people;
  @Output() select = new EventEmitter();

  onClick(value){
    this.select.next(value);
  }
}

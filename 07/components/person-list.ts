import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Card} from './card';

@Component({
  selector: 'person-list',
  directives: [Card],
  template: `<style>
  .person {
    cursor: pointer;
    cursor: hand;
  }
</style>

<input [(ngModel)]="name" #i type="text">
<button (click)="onClick(i.value)"><i class="fa fa-plus"></i></button>

<hr>
<span
  class="person"
  (mouseover)="isOver = true"
  (mouseout)="isOver = false"
>
        {{name}}
        <i
          *ngIf="name"
          class="fa"
          [ngClass]="{'fa-star':isOver, 'fa-star-o':!isOver}">
        </i>
      </span>

<card
  *ngFor="#person of people"
  [person]="person">
</card>
`
})
export class PersonList{
  @Input() people;
  @Output() select = new EventEmitter();

  onClick(value){
    this.select.next(value);
  }
}

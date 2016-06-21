import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'person-list',
  template: `
    <style>
    .person { cursor: pointer; cursor: hand; }
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
    
  <div>
    {{people[0].name}}
  </div>
`
})
export class PersonList{
  @Input() people;
  @Output() select = new EventEmitter();

  onClick(value){
    this.select.emit(value);
  }
}

import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'person-list',
  template: `<style>
  .person {
    cursor: pointer;
    cursor: hand;
  }
  .card{
    max-width: 200px;
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


  <div class="card" *ngFor="#person of people">
    <img class="card-img-top" [src]="person.image"
         alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">{{person.name}}</h4>
      <a href="#" class="btn btn-primary"><i class="fa fa-plus"></i> Add to Party</a>
    </div>
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

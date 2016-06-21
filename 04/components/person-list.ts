import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'person-list',
  template: `
    <input #i type="text">
    <button (click)="onClick(i.value)"><i class="fa fa-plus"></i></button>
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

import {Component, Input} from 'angular2/core';
@Component({
  selector: 'card',
  template: `<style>
  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .info{
    display: flex;
    flex-basis: 100px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
<div class="card">
    <img [src]="person.image">
    <div class="info">
      <h5>{{person.name}}</h5>
      <a class="btn btn-primary"><i class="fa fa-plus"></i> Add to Party</a>
    </div>
  </div>
`
})
export class Card{
  @Input() person;
}

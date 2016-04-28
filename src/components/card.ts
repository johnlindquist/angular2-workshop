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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>
<div class="card">
    <img [src]="person.image">
    <div class="info">
      <h5 class="name">{{person.name}}</h5>
      <a href="#" class="btn btn-primary"><i class="fa fa-plus"></i> Add to Party</a>
    </div>
  </div>
`
})
export class Card{
  @Input() person;
}

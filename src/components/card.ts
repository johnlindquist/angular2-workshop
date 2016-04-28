import {Component, Input} from 'angular2/core';

@Component({
  selector: 'card',
  template: `<style>
.card{max-width: 200px};
</style>
<div class="card">
    <img class="card-img-top" [src]="person.image"
         alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">{{person.name}}</h4>
      <a href="#" class="btn btn-primary"><i class="fa fa-plus"></i> Add to Party</a>
    </div>
  </div>
`
})
export class Card{
  @Input() person;
}

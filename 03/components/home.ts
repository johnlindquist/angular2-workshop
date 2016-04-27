import {Component} from 'angular2/core';

@Component({
  selector: 'home',
  template: `
    <i class="fa fa-home" aria-hidden="true"></i>
    <span>I'm the home template</span>
    <i class="fa fa-home" aria-hidden="true"></i>
    
    <hr>
    
    <input #i type="text">
    <button (click)="onClick(i.value)"><i class="fa fa-plus"></i></button>
`
})
export class Home{
  onClick(input){
    console.log(input);
  }
}

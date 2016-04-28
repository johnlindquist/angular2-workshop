import {Component} from 'angular2/core';
import {PersonList} from './person-list';

@Component({
  selector: 'home',
  directives: [PersonList],
  template: `
    <i class="fa fa-home" aria-hidden="true"></i>
    <span>I'm the home template</span>
    <i class="fa fa-home" aria-hidden="true"></i>
    
    <hr>
    
    <person-list (select)="onSelect($event)" [people]="people"></person-list>
`
})
export class Home{
  people = [
    {
      name:"Luke Skywalker",
      image: "http://localhost:4000/luke_skywalker.jpg"
    },
    {
      name:"Darth Vader",
      image: "http://localhost:4000/darth_vader.jpg"
    },
    {
      name:"Leia Organa",
      image: "http://localhost:4000/leia_organa.jpg"
    }
  ];

  onSelect(person){
    console.log(person);
  }
}

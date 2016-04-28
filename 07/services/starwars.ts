import {Injectable} from 'angular2/core';
@Injectable()
export class StarWars{
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
}

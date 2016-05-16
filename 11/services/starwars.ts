import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

const API = 'http://localhost:4000';

@Injectable()
export class StarWars{
  people;
  constructor(private _http:Http){
    this.people = _http.get(`${API}/people`)
      .map(res => res.json() //get the response as json
        .map(person =>
          Object.assign(person, {image: `${API}/${person.image}`})
        )
      )
  }
}

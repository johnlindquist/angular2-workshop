## Angular 2 StarWars Party

### Credits
Based heavily on the official seed project:
[https://github.com/angular/angular2-seed](https://github.com/angular/angular2-seed)

### Workshop Resources
https://angular.io/docs/ts/latest/cheatsheet.html
http://hackerthemes.com/bootstrap-cheatsheet/
https://fortawesome.github.io/Font-Awesome/icons/

### Exercise 0 - Setup
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed
- run `npm install -g webpack webpack-dev-server typings typescript` to install global dependencies
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)

#### Set up the StarWars server
- Install and run [https://github.com/johnlindquist/swapi-json-server](https://github.com/johnlindquist/swapi-json-server)
- open browser to [`http://localhost:4000`](http://localhost:4000)


### Exercise 1 - Hello World
- Notice the `<app>` tag in `index.html`
- Delete everything in `app.ts`
- Write a `@Component` with a selector of `'app'`
- Create a basic `template`
- Remember to `export` your `class`

### Exercise 2 - Create a Component
- Create a `components` directory
- Add a file called `home.ts`
- Create a `@Component` and `export` it
- Import your component into `app.ts`
- Include the component with `directives:[Home]`
- Add the component to your `template` with `<home>`

### Exercise 3 - Handling Clicks and Refs
#### Logging an event
- Create a button in your `Home` component
- Handle the click with a `(click)=onClick($event)`
- Log out the event

#### Logging an Input
- Create an `input`
- Reference the `input` with a `#i`
- Pass the value with `#i.value` of the input to the `onClick`
- Log out the value

### Exercise 4 - Smart and Dumb Components
#### Inputs
- Add a `people = [{name:"John"}];` to your `Home` component
- Create a `PersonList` component
- Add the `PersonList` to your `Home` component
- Create an `@Input` called `people` (remember to import it)
- Push `people` from `Home` into `PersonList` with `[people]=people`
- Render the first person from the `@Input` with `{{people[0].name}}`

#### Outputs
- Move the `input` and the `button` to the `PersonList`
- Create an `@Output()` called `select`
- Call `this.select.next(value)` in the button's `onClick` handler
- Handle the `select` event in`Home` with `(selcect)=onSelect($event)`
- Log out the input

### Exercise 5 - Templates, Styles, and Built-in Directives
#### `NgModel`
- Add an `[(ngModel)]="name"` to the `input`
- Add a `<span>{{name}}</span>`
- Type in the `input` to see the name appear in the `<span>`

#### `<style>`
- Add a `<style></style>` tag to the template
- Add a `.person { cursor: pointer; cursor: hand; }` style
- Add the `class=person` to your span
- Roll over your `<span>` to see the hand cursor

#### `*ngIf`
- Add a `<i class="fa fa-star"></i>`
- Add an `*ngIf="name"` to the `<i>`
- Type in the input to see the `<i>` appear

#### `[ngClass]`
- Add `(mouseover)="isOver = true" (mouseout)="isOver = false"` to `span`
- Add `class="fa"` to the `<i>`
- Add `[ngClass]="{'fa-star':isOver, 'fa-star-o':!isOver}"` to the `<i>`
- Roll over the span to she the icon toggle

### Exercise 6 - Repeating Elements with *ngFor

#### `*ngFor`
- Add more `people` to the `Home`
```js
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
```
- Add a `card` to the `PersonList`
```html
<div class="card">
  <img [src]="person.image">
  <div class="info">
    <h5>{{person.name}}</h5>
    <a href="#" class="btn btn-primary"><i class="fa fa-plus"></i> Add to Party</a>
  </div>
</div>
```

#### Loop through each person using `*ngFor`
- Create a `Card` component
- Give the `Card` an `@Input()` of `person`
- Add the `Card` to the `PersonList`
- Add `*ngFor="#person of people"` to the `card`
- Update the `src` to `[src]="person.image"`
- Show the `person.name` in the `h4` with `{{person.name}}`

```js

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
      <a href="#" class="btn btn-primary"><i class="fa fa-plus"></i> Add to Party</a>
    </div>
  </div>
`
})
export class Card{
  @Input() person;
}

```

### Exercise 7 - Move the Data to a Service
- Create `services` directory
- Create a `StarWars.ts` file
- Use the `@Inject()` decorator on a `StarWars` class
- Move the `people` from the `Home` to the service
- Include the service in the `Home` `providers:[]`
- Inject the service `constructor(public starWars:StarWars){}`
- Use the service in the template `[people]="starWars.people"`


### Exercise 8 - Loading Data with Http
- Add `providers: [HTTP_PROVIDERS],` to your `app.ts`
- Import `import {Http} from 'angular2/http';` in your service
- Inject `Http` in your service `constructor(private _http:Http){}`
- Delete the `people` array
- In the constructor, assign the people to an `http` request
- Use `http.get()` then `map` then response using `res => res.json()`
- `map` the images: `luke_skywalker.jpg` to `http://locahost:4000/luke_skywalker.jpg`

```js
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
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

```

Use an `| async` pipe to load the data in the template
```js
  [people]="starWars.people | async"
```

### Exercise 8 - Searching Data with a Pipe
#### Housekeeping
- Clean up `PersonList` template so only `input` and `card`s remain

```js
<input [(ngModel)]="name" type="text">

<div class="card-container">
  <card
    *ngFor="#person of people"
    [person]="person">
  </card>
</div>
```

#### Creating a Pipe
- Create a `pipes` directory
- Create a `search.ts` file
- Create a `@Pipe()` called `Search`
- Create your own searching logic
```js
import {Pipe} from 'angular2/core';
@Pipe({
  name: 'search'
})
export class Search{
  transform(data, key, term = ""){
    if(!data) return null;
    return data.filter(item => {
      return item[key]
        .toLowerCase()
        .includes(term.toLowerCase());
    })
  }
}
```

#### Using the Pipe
Add the `Search` to your `PersonList`
```js
pipes:[Search],
```

- Add the `name` ("search") of the `Search` pipe to the template
- Use `'name'` as the `key` to search on
- Use the `name` from the `[(ngModel)]="name"` as the term
```js
  #person of people | search:'name':name"
```


### Exercise 10 - Adding Routes
- Add a `<base href="/">` to your `index.html` `<head>`
- Create a simple `Party` component with a `hello world` template
- Import all the required Router classes into `app.ts`
```js
import {ROUTER_PROVIDERS, RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
```
- Include `RouterOutlet` and `RouterLink` in your `directives:[]`
```js
  directives: [RouterOutlet, RouterLink],
```
- Replace `<home>` the `<router-outlet>`
- Decorate your `App` with your routes
```js
@RouteConfig([
  {path: '/home', name: 'Home', component: Home, useAsDefault: true},
  {path: '/party', name: 'Party', component: Party},
  {path: '/**', redirectTo: ['Home'] }
])
``` 
- Create a nav with `[routerLink]`
```js
<ul class="nav nav-tabs">
    <li class="nav-item">
      <a [routerLink]="['Home']" class="nav-link">Home</a>
    </li>
    <li class="nav-item">
      <a [routerLink]="['Party']" class="nav-link">Party</a>
    </li>
  </ul>
```
- Stylize the active route with a `.router-link-active` style:
```css
.router-link-active{
  color: #55595c;
  background-color: #fff;
  border-color: #ddd #ddd transparent;
}
```
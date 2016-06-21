{% raw %}

## Angular 2 StarWars Party

### Workshop Resources
- [Angular 2 Cheat Sheet](https://angular.io/docs/ts/latest/cheatsheet.html)
- [Bootstrap 4 Cheat Sheet](http://hackerthemes.com/bootstrap-cheatsheet/)
- [Font Awesome Cheat Sheet](https://fortawesome.github.io/Font-Awesome/icons/)

### Completed Exercises
The numbers folders 01-10 can be renamed at any time to catch up.
For example, rename `07` to `src` then restart your `npm start` to catch up to Exercise 7.

### Exercise 00 - Setup
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed
- Run `npm install -g webpack webpack-dev-server typings typescript` to install global dependencies
- Navigate to your project folder from the command line
- Run `npm install` to install dependencies
- Run `npm start` to fire up dev server
- Open browser to [`http://localhost:3000`](http://localhost:3000)

#### Set up the StarWars server
- Install and run [https://github.com/johnlindquist/swapi-json-server](https://github.com/johnlindquist/swapi-json-server)
- Open browser to [`http://localhost:4000`](http://localhost:4000)

### Exercise 01 - Hello World
- Notice the `<app>` tag in `index.html`
- Delete everything in `app.ts`
- Write a `@Component` with a selector of `'app'`
- Create a basic `template`
- Remember to `export` your `class`

### Exercise 02 - Create a Component
- Create a `components` directory
- Add a file called `home.ts`
- Create a `@Component` and `export` it
- Import your component into `app.ts`
- Include the component with `directives:[Home]`
- Add the component to your `template` with `<home>`

### Exercise 03 - Handling Clicks and Refs
#### Logging an event
- Create a button in your `Home` component
- Handle the click with a `(click)=onClick($event)`
- Log out the event

#### Logging an Input
- Create an `input`
- Reference the `input` with a `#i`
- Pass the value with `#i.value` of the input to the `onClick`
- Log out the value

### Exercise 04 - Smart and Dumb Components
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
- Call `this.select.emit(value)` in the button's `onClick` handler
- Handle the `select` event in`Home` with `(select)=onSelect($event)`
- Log out the input

### Exercise 05 - Templates, Styles, and Built-in Directives
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
- Change the `class` attribute to `class="fa"` on the `<i>` element
- Add `[ngClass]="{'fa-star':isOver, 'fa-star-o':!isOver}"` to the `<i>`
- Roll over the span to see the icon toggle

### Exercise 06 - Repeating Elements with *ngFor

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
#### Loop through each person using `*ngFor` on a simple element
- Create a `p` element in `PersonList` that binds to `person.name`
- Add `*ngFor="let person of people"` to the `p` tag

#### Loop through each person using `*ngFor` on a custom component
- Create a `Card` component using the code below as a reference
- Give the `Card` an `@Input()` of `person`
- Add the `Card` to the `PersonList`
- Add `*ngFor="let person of people"` to the `card`
- Update the `src` to `[src]="person.image"`
- Show the `person.name` in the `h5` with `{{person.name}}`

```js

import {Component, Input} from '@angular/core';
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

```

### Exercise 07 - Move the Data to a Service
- Create `services` directory
- Create a `StarWars.ts` file
- Use the `@Inject()` decorator on a `StarWars` class
- Move the `people` from the `Home` to the service
- Include the service in the `Home` `providers:[]`
- Inject the service `constructor(public starWars:StarWars){}`
- Use the service in the template `[people]="starWars.people"`


### Exercise 08 - Loading Data with Http
- Add `providers: [HTTP_PROVIDERS],` to your `app.ts`
- Import `import {Http} from '@angular/http';` in your service
- Inject `Http` in your service `constructor(private _http:Http){}`
- Delete the `people` array
- In the constructor, assign the people to an `http` request
- Use `http.get()` then `map` then response using `res => res.json()`
- `map` the images: `luke_skywalker.jpg` to `http://locahost:4000/luke_skywalker.jpg`

```js
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

```

Use an `| async` pipe to load the data in the template
```js
  [people]="starWars.people | async"
```

### Exercise 09 - Searching Data with a Pipe
#### Housekeeping
- Clean up `PersonList` template so only `input` and `card`s remain

```js
<input [(ngModel)]="name" type="text">

<div class="card-container">
  <card
    *ngFor="let person of people"
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
import {Pipe} from '@angular/core';
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
  let person of people | search:'name':name"
```


### Exercise 10 - Adding Routes
- Add a `<base href="/">` to your `index.html` `<head>`
- Create a simple `Party` component with a `hello world` template
- Import all the required Router classes into `app.ts`
```js
import {ROUTER_PROVIDERS, RouteConfig, RouterOutlet, RouterLink} from '@angular/router';
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

## Challenges (Solutions Not Included!)
The following are for people who enjoy a challenge and working ahead.

### Challenge
Create a second service with a route to manage who you "Add" to the Party.

### Moderate Challenge
Add create, read, update, delete to the "Party" service
so you can add, remove, edit people to the party. Also make
sure you can't add the same Person to the party twice.

### Difficult Challenge
Create a "PersonDetail" component and route so that when you
click on the Person image, it navigates to a route displaying
Person's detail *including* all the images of starships they've
flown :wink:

### Difficult Challenge
Build an "Autocomplete" search box from the Star Wars api.
Prior RxJS knowledge is recommended.

### Super Duper Tough Challenge
Build a full Create, Read, Update, Delete app (the api supports it!)
with the people from Star Wars including all of the features above!
{% endraw %}

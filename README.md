## Angular 2 StarWars Party

### Credits
Based heavily on the official seed project:
[https://github.com/angular/angular2-seed](https://github.com/angular/angular2-seed)

### Workshop Resources
https://angular.io/docs/ts/latest/cheatsheet.html
http://hackerthemes.com/bootstrap-cheatsheet/
https://fortawesome.github.io/Font-Awesome/icons/

### Step 0 - Setup
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed
- run `npm install -g webpack webpack-dev-server typings typescript` to install global dependencies
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)

#### Set up the StarWars server
- Install and run [https://github.com/johnlindquist/swapi-json-server](https://github.com/johnlindquist/swapi-json-server)
- open browser to [`http://localhost:4000`](http://localhost:4000)


### Step 1 - Hello World
- Notice the `<app>` tag in `index.html`
- Delete everything in `app.ts`
- Write a `@Component` with a selector of `'app'`
- Create a basic `template`
- Remember to `export` your `class`

### Step 2 - Create a Component
- Create a `components` directory
- Add a file called `home.ts`
- Create a `@Component` and `export` it
- Import your component into `app.ts`
- Include the component with `directives:[Home]`
- Add the component to your `template` with `<home>`

### Step 3 - Handling Clicks and Refs
#### Logging an event
- Create a button in your `Home` component
- Handle the click with a `(click)=onClick($event)`
- Log out the event

#### Logging an Input
- Create an `input`
- Reference the `input` with a `#i`
- Pass the value with `#i.value` of the input to the `onClick`
- Log out the value

### Step 4 - Smart and Dumb Components
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

### Step 5 - Templates, Styles, and Built-in Directives
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

### Step 6 - Repeating Elements with *ngFor

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
    <img class="card-img-top" src="person"
         alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title"></h4>
      <a href="#" class="btn btn-primary"><i class="fa fa-plus"></i> Add to Party</a>
    </div>
  </div>
```

#### Loop through each person using `*ngFor`
Add `*ngFor="#person of people"` to the `card`
Update the `src` to `[src]="person.image"`
Show the `person.name` in the `h4` with `{{person.name}}`







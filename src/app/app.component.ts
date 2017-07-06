import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Sansa Stark' },
  { id: 12, name: 'Arya Stark' },
  { id: 13, name: 'Daenerys Targaryen' },
  { id: 14, name: 'Brandon Stark' },
  { id: 15, name: 'Brienne of Tarth' },
  { id: 16, name: 'Cersei Lannister' },
  { id: 17, name: 'Tyrion Lannister' },
  { id: 18, name: 'Jaime Lannister' },
  { id: 19, name: 'Sandor Clegane' },
  { id: 20, name: 'Grey Worm' }
];

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>

  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" >
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>
  `
})

export class AppComponent  {
  title = 'Tour of Game of Thrones';
  hero: Hero = {
    id: 1,
    name: 'John Snow'
  }
}

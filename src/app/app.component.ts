import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  `
  ,
})

export class AppComponent  {
  title = 'Tour of Game of Thrones';
  hero = 'John Snow';

}

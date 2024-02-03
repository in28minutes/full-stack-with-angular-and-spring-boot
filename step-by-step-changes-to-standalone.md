# Why Angular Standalone Components?
Angular 13 has introduced a novel functionality known as `Angular standalone components`. 
These components streamline the process of Angular development and minimize the need for repetitive code. 
_Unlike conventional Angular modules, you DO NOT need to have `NgModule` files for standalone components._
Consequently, you can effortlessly import and utilize them in any section of an application.

## Benefits
- Improved Developer Experience
- Reduced boilerplate
- Increased modularity
- Improved performance

# ANGULAR STANDALONE MIGRATION STEPS

# Section3: Getting Hands on With Angular
## 14. Step 09: Change - generated
### frontend/todo/src/app/app.component.ts

### BEFORE 
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>{{title}}<h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  message = 'Welcome to in28Minutes';
}
```

### AFTER
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>{{title}}<h1>',
  styleUrls: ['./app.component.css'],
  standalone: true, // Generated - Change
})
export class AppComponent {
  title = 'todo';
  message = 'Welcome to in28Minutes';
}
```

# ANGULAR STANDALONE COMPONENTS AND MIGRATION STEPS

## Why Angular Standalone Components?
Angular 13 has introduced a novel functionality known as `Angular standalone components`. 
These components streamline the process of Angular development and minimize the need for repetitive code. 
_Unlike conventional Angular modules, you DO NOT need to have `NgModule` files for standalone components._
Consequently, you can effortlessly import and utilize them in any section of an application.

## Benefits
- Improved Developer Experience
- Reduced boilerplate
- Increased modularity
- Improved performance

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
  standalone: true // Generated - Change
})
export class AppComponent {
  title = 'todo';
  message = 'Welcome to in28Minutes';
}
```
## 15. Step 10: Change - generated, No Update in app.module.ts
### frontend/todo/src/app/welcome/welcome.component.ts

### BEFORE
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
   constructor() { }
   
   ngOnInit() {
   }
}
```

### AFTER
> NOTE: In a standalone setup, the utilization of `@NgModule` and the `app.module.ts` file is not required, resulting in no updates being made.
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  standalone: true // Generated - Change
})
export class WelcomeComponent implements OnInit {
   constructor() { }
   
   ngOnInit() {
   }
}
```

## 17. Step 12: Change - generated, No Update in app.module.ts
### frontend/todo/src/app/login/login.component.ts

### BEFORE
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
   constructor() { }
   
   ngOnInit() {
   }
}
```

### AFTER
> NOTE: In a standalone setup, the utilization of `@NgModule` and the `app.module.ts` file is not required, resulting in no updates being made.
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true // Generated - Change
})
export class LoginComponent implements OnInit {
   constructor() { }
   
   ngOnInit() {
   }
}
```
## 21. Step 16: Change - generated, import `NgIf` directive
### frontend/todo/src/app/login/login.component.ts

### BEFORE
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'in28minutes'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  
  constructor() { }
   
   ngOnInit() {
   }
   
   handleLogin() {
      // console.log(this.username);
      if(this.username==="in28minutes" && this.password === 'dummy') {
        this.invalidLogin = false
      } else {
        this.invalidLogin = true
      }
   }
}
```

### AFTER
```js
import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // Changed

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [NgIf]
})
export class LoginComponent implements OnInit {
  username = 'in28minutes'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  
  constructor() { }
   
   ngOnInit() {
   }
   
   handleLogin() {
      // console.log(this.username);
      if(this.username==="in28minutes" && this.password === 'dummy') {
        this.invalidLogin = false
      } else {
        this.invalidLogin = true
      }
   }
}
```

## 22. Step 17: Change - generated
### frontend/todo/src/error/error.component.ts

### BEFORE
```js
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

### AFTER
```js
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css'],
    standalone: true // Generated - Change
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```
## 25. Step 20: Change - generated, No Update in app.module.ts
### frontend/todo/src/list-todos/list-todos.component.ts

### BEFORE
```js
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-todos',
    templateUrl: './list-todos.component.html',
    styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```
### AFTER
```js
import { Component, OnInit } from '@angular/core';

import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';

@Component({
    selector: 'app-list-todos',
    templateUrl: './list-todos.component.html',
    styleUrls: ['./list-todos.component.css'],
    standalone: true, // Generated - Change
    imports: [NgIf, NgFor, UpperCasePipe, DatePipe] // Generated - Change
    
})
export class ListTodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```
## 26. Step 21: Change - generated
### frontend/todo/src/app/welcome/welcome.component.ts

### BEFORE
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
   constructor() { }
   
   ngOnInit() {
   }
}
```
### AFTER

```js
import { ActivatedRoute, RouterLink } from '@angular/router'; // Added RouterLink
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  standalone: true, // Generated - Change
  imports: [RouterLink, NgIf] // Added
})
export class WelcomeComponent implements OnInit {
   constructor() { }
   
   ngOnInit() {
   }
}
```
import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    //template: '<h1>{{title}}<h1>',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [MenuComponent, RouterOutlet, FooterComponent]
})
export class AppComponent {
  title = 'todo';
  message = 'Welcome to in28Minutes';
}
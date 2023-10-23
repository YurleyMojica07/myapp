import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName:     string = ' ';
  secondName:    string = ' ';
  firstLastName: string = ' ';
  secondLastName:string = ' ';
  Email:         string = ' ';
  Password:      string = '';
  user:          string = ' ';
}

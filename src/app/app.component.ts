import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from "./Shared/Models/user";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pratham-Soni-Learning-Angular';
  course:string = 'Javascript Frameworks';
  courseCredit:number = 3;
}


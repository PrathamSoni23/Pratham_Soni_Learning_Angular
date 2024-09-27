import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Movies } from "./movies";
import {MovieListComponent} from "./movie-list/movie-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  movieList : Movies[] = [

    {name: 'Dev D', director: 'Anurag K', yearReleased: '2011',collection: 59999, isHit: false},
    {name: 'Tiger 3', director: 'Kjo', yearReleased: '2015', collection: 8954664, isHit: true},
    {name: 'Race 3', director: 'SRK', yearReleased: '2021', collection:70000, isHit: true},
    {name: 'SOTY', director: 'YRF', yearReleased: '2012', collection: 876885, isHit: true},
    {name: 'Singh is King', director: 'Akki', yearReleased: '2005', collection: 50000, isHit: false},
    {name: 'Hate Story', director: 'Emraan', yearReleased: '2016', collection:10000, isHit:false}

  ];

}


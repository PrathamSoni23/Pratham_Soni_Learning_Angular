import {Component, OnInit} from '@angular/core';
import {MovieListItemComponent} from "../movie-list-item/movie-list-item.component";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieListItemComponent
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  movieItems:any[] = [

    {movieTitle: "Jumanji", director:"Yash", production: "YRF", yearReleased: 2019},
    {movieTitle: "Black Panther", director:"Stan lee", production: "MCU", yearReleased: 2018},
    {movieTitle: "Mission Impossible 10", director:"Dhwayne Johnson", production: "Rock Productions", yearReleased: 2002},
    {movieTitle: "Smile", director:"Parker", production: "Temple Hill", yearReleased: 2022}

  ];


}

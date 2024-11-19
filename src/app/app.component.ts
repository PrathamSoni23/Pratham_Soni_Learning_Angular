import { Component, OnInit } from '@angular/core';

import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {CommonModule, NgIf, NgOptimizedImage} from '@angular/common';
import { Movies } from "./movies";
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieListItemComponent} from "./movie-list-item/movie-list-item.component";
import {movieItems} from "./data/mockMovie";
import {MoviesDataService} from "./Services/movies-data.service";
import {Movie} from "./Shared/Models/movies";
import {bootstrapApplication} from "@angular/platform-browser";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./modify-list-item/modify-list-item.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MovieListComponent, MovieListItemComponent, RouterLink, RouterLinkActive, NgOptimizedImage, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{

  title = "Movies List"

  movieList : Movie[] = [];
  chooseMovie?: Movie | undefined;
  movieYear =  2018;
  constructor(private movieService : MoviesDataService) {
  }

  ngOnInit(): void {

    this.movieService.findMovieYear(this.movieYear).subscribe(movie => {

      this.chooseMovie = movie;
    });

    this.movieService.getMovies().subscribe(movies => {

      this.movieList = movies;
    });



  }




}








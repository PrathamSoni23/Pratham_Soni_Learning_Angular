import {Component, OnInit} from '@angular/core';
import {MovieListItemComponent} from "../movie-list-item/movie-list-item.component";
import {Movie} from "../Shared/Models/movies";
import {DatePipe, NgClass, NgFor, NgIf, NgStyle} from "@angular/common";
import {Movies} from "../movies";
import {MoviesDataService} from "../Services/movies-data.service";
import {movieItems} from "../data/mockMovie";
import {Router, RouterLink} from "@angular/router";


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieListItemComponent, NgFor, NgClass, NgIf, NgStyle, RouterLink, DatePipe
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})

export class MovieListComponent implements OnInit{

  movieItems: Movie[] = [];

  constructor(private moviesService : MoviesDataService,
              private router : Router) {

  }

  ngOnInit() {

    this.moviesService.getMovies().subscribe({
      next: (data: Movie[]) => this.movieItems = data,
      error:err => console.log(" error fetching Movies data ",err),
      complete: () => console.log(" Movies data fetch complete! ")
    })


  }

  editMovie(movie : Movie) {

    this.router.navigate(['/modify-list-item', movie.yearReleased]);

  }

  deleteMovie(id : number) {

    this.moviesService.removeMovie(id);
    this.movieItems = this.movieItems.filter(movieItems => movieItems.yearReleased !== id);

  }


}

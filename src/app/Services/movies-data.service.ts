import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Movie} from "../Shared/Models/movies";
import {movieItems} from "../data/mockMovie";

@Injectable({
  providedIn: 'root'
})



export class MoviesDataService {

  private movies: Movie[] =movieItems;

  constructor() { }
  getMovies(): Observable<Movie[]> {
    return of(movieItems);

  }

  findMovieYear(releaseYear : number): Observable<Movie | undefined> {

    const movieToFind = this.movies.find(user => user.yearReleased === releaseYear);
    return of(movieToFind);

  }

  addMovie(newMovie : Movie): Observable<Movie[]> {

    this.movies.push(newMovie)
    return of(this.movies);

  }

  updateMovie(modifyMovie : Movie): Observable<Movie[] | undefined> {

    const movieYear = this.movies.findIndex(user => user.yearReleased === modifyMovie.yearReleased);
    if (movieYear > -1) {
      this.movies[movieYear] = modifyMovie;
    }
    return of(this.movies);

  }

  removeMovie(deleteMovie : number): void {

    this.movies = this.movies.filter(user => user.yearReleased !== deleteMovie);


  }

  generateNewId() : number {

    return this.movies.length > 0 ? Math.max(...this.movies.map(movie => movie.yearReleased)) +1 : 1;
  }

}

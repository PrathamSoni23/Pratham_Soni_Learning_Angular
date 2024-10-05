import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Movie} from "../Shared/Models/movies";
import {movieItems} from "../data/mockMovie";

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor() { }
  getMovies(): Observable<Movie[]> {

    return of(movieItems);


  }
}

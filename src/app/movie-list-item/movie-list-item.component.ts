import {Component, Input} from '@angular/core';
import {MovieListComponent} from "../movie-list/movie-list.component";
import {Movie} from "../Shared/Models/movies";

@Component({
  selector: 'app-movie-list-item',
  standalone: true,
  imports: [],
  templateUrl: './movie-list-item.component.html',
  styleUrl: './movie-list-item.component.css'
})
export class MovieListItemComponent {

  @Input() movieItems?:Movie;
}

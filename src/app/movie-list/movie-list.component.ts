import {Component, OnInit} from '@angular/core';
import {MovieListItemComponent} from "../movie-list-item/movie-list-item.component";
import {Movie} from "../Shared/Models/movies";
import {NgClass, NgFor} from "@angular/common";
import {Movies} from "../movies";


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieListItemComponent, NgFor, NgClass
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})

export class MovieListComponent {




}

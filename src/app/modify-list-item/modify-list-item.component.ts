import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormBuilder} from "@angular/forms";
import {FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";
import {Movie} from "../Shared/Models/movies";
import {ActivatedRoute, Router} from "@angular/router";
import {MoviesDataService} from "../Services/movies-data.service";
import {movieItems} from "../data/mockMovie";
import {NgIf} from "@angular/common";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";


@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [ReactiveFormsModule,
            FormsModule,
            NgIf,
            HighlightOnFocusDirective],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit {


  movieForm: FormGroup;
  movie: Movie | undefined;

  constructor(
    private movieDataService: MoviesDataService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.movieForm = this.fb.group({
      movieTitle: ['', Validators.required],
      director: ['', Validators.required],
      production: ['', Validators.required],
      yearReleased: ['', Validators.required],
      collection: ['', Validators.required]

    });

  }


  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('yearReleased');
    if (id) {

      this.movieDataService.findMovieYear(+id).subscribe(movie => {

        if (movie) {
          this.movie = movie;

          this.movieForm.patchValue(movie);
        }

      });

    }

  }

  onSubmit(): void {

    const movie: Movie = this.movieForm.value;

    if (movie.yearReleased) {

      this.movieDataService.updateMovie(movie).subscribe(() => {
        this.router.navigate(['/movie-list-component']);
        this.movieForm.reset();
      });

    } else {

      movie.yearReleased = this.movieDataService.generateNewId();
      this.movieDataService.addMovie(movie).subscribe(() => {
        this.router.navigate(['/movie-list-component']);
        this.movieForm.reset();
      });
    }
  }
}


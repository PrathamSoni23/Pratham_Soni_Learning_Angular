import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import {MovieListComponent} from "./app/movie-list/movie-list.component";
import {MovieListItemComponent} from "./app/movie-list-item/movie-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


const routes: Routes = [

  {path:'movie-list', component: MovieListComponent },
  {path: 'movie-list-item', component: MovieListItemComponent },
  { path: 'Page-not-found', component: PageNotFoundComponent},
  {path: 'modify-list-item', component: ModifyListItemComponent}

];

bootstrapApplication(AppComponent, {
  providers : [provideRouter(routes)]
});

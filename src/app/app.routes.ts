import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './Components/movies/movies.component';
import { SeriesComponent } from './Components/series/series.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: MoviesComponent },
    { path: 'series', component: SeriesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AppRouting {}
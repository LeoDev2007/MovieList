import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Services/Movies/movie.service';
import { CardsComponent } from '../../Layouts/cards/cards.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CardsComponent, CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  movies: any[] = []

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe({
      next: (data) => {
        this.movies = data.results.slice(0,5);
      },
      error: (error) => {
        console.error('Requisição fracassada', error);
      }
    });
}

}


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieService } from '../../Services/Series/serie.service';
import { CardsSeriesComponent } from '../../Layouts/cards-series/cards-series.component';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CommonModule, CardsSeriesComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent implements OnInit {

  series: any[] = []


  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.serieService.getSeries().subscribe({
      next: (data) => {
        this.series = data.results.slice(0,5)
      },

      error: (error) => {
        console.error('Requsição fracassada', error);
      }
    })
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-series',
  standalone: true,
  imports: [],
  templateUrl: './cards-series.component.html',
  styleUrl: './cards-series.component.css'
})
export class CardsSeriesComponent {
  @Input() serie : any;
}

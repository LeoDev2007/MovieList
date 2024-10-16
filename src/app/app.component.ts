import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppRouting } from './app.routes';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Layouts/header/header.component';
import { FooterComponent } from './Layouts/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppRouting, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MovieList';
}

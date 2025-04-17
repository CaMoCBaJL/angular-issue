import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcdaMainPageComponent } from './pages/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AcdaMainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'activities-dashboard';
}

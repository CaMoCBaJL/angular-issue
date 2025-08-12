import { Component } from '@angular/core';
import { HttpService } from 'activities-rest-lib';

@Component({
  selector: 'acda-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass'
})
export class AcdaMainPageComponent {
  constructor(private readonly _service: HttpService) {

  }
}

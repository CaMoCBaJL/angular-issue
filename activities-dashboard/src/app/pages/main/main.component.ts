import { Component } from '@angular/core';
import { TestService } from './service';
import { HttpService } from 'activities-rest-lib';

@Component({
  selector: 'acda-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass',
  providers: [
    TestService,
    HttpService,
  ]
})
export class AcdaMainPageComponent {
  constructor(private readonly _service: HttpService) {

  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import {LegacyDepModule} from 'legacy-dep';

@Component({
  selector: 'acda-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass',
  imports: [
    CommonModule,
    NgxMaskModule,
    LegacyDepModule,
  ],
  providers: [],
})
export class AcdaMainPageComponent {
  
}

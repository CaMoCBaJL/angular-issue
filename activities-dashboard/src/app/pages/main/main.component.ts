import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { DynamicFormsBasicUIModule } from '@ng-dynamic-forms/ui-basic';
import {LegacyDepModule} from 'legacy-dep';

@Component({
  selector: 'acda-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass',
  imports: [
    CommonModule,
    NgxMaskModule,
    ReactiveFormsModule,
    DynamicFormsBasicUIModule,
    LegacyDepModule,
  ],
  providers: [],
})
export class AcdaMainPageComponent {
  
}

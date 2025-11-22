import { NgModule } from '@angular/core';
import { LegacyDepComponent } from './legacy-dep.component';
import { DynamicFormsBasicUIModule } from '@ng-dynamic-forms/ui-basic';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LegacyDepComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsBasicUIModule,
  ],
  exports: [
    LegacyDepComponent
  ]
})
export class LegacyDepModule { }

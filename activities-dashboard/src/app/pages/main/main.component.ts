import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { DynamicFormsBasicUIModule } from '@ng-dynamic-forms/ui-basic';

import {
  DynamicFormModel,
  DynamicCheckboxModel,
  DynamicInputModel,
  DynamicRadioGroupModel,
  DynamicFormService
} from "@ng-dynamic-forms/core";

export const MY_FORM_MODEL: DynamicFormModel = [

  new DynamicInputModel({
    id: "sampleInput",
    label: "Sample Input",
    maxLength: 42,
    placeholder: "Sample input"
  }),

  new DynamicRadioGroupModel<string>({
    id: "sampleRadioGroup",
    label: "Sample Radio Group",
    options: [
      { label: "Option 1", value: "option-1" },
      { label: "Option 2", value: "option-2" },
      { label: "Option 3", value: "option-3" }
    ],
    value: "option-3"
  }),

  new DynamicCheckboxModel({
    id: "sampleCheckbox",
    label: "I do agree"
  })
];

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
  ],
  providers: [],
})
export class AcdaMainPageComponent {
  formModel: DynamicFormModel = [

    new DynamicInputModel({
      id: "sampleInput",
      label: "Sample Input",
      maxLength: 42,
      placeholder: "Sample input"
    }),

    new DynamicRadioGroupModel<string>({
      id: "sampleRadioGroup",
      label: "Sample Radio Group",
      options: [
        { label: "Option 1", value: "option-1" },
        { label: "Option 2", value: "option-2" },
        { label: "Option 3", value: "option-3" }
      ],
      value: "option-3"
    }),

    new DynamicCheckboxModel({
      id: "sampleCheckbox",
      label: "I do agree"
    })
  ];
  formGroup: any;
  constructor(
    private formService: DynamicFormService
  ) {

  }

  ngOnInit(): void {
    this.formGroup = this.formService.createFormGroup(this.formModel)
  }
}

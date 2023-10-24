import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageInputFormComponent } from './first-page-input-form/first-page-input-form.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FirstPageComponent } from './first-page/first-page.component';


@NgModule({
  declarations: [
    FirstPageInputFormComponent,
    FirstPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    FirstPageInputFormComponent,
    FirstPageComponent
  ]
})
export class FirstPageModule { }

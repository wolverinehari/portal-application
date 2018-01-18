import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HotTableModule } from 'angular-handsontable';
import { AppComponent } from './app.component';
import { ApplicantFormComponent } from './applicant-form/applicant-form.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { TextAreaComponent } from './text-area/text-area.component';


@NgModule({
  declarations: [
    AppComponent,
    ApplicantFormComponent,
    SelectBoxComponent,
    InputBoxComponent,
    TextAreaComponent
  ],
  imports: [
    BrowserModule,
    HotTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

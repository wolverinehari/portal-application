import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HotTableModule } from 'angular-handsontable';
import { AppComponent } from './app.component';
import { ApplicantFormComponent } from './applicant-form/applicant-form.component';
import { SelectBoxComponent } from './select-box/select-box.component';


@NgModule({
  declarations: [
    AppComponent,
    ApplicantFormComponent,
    SelectBoxComponent
  ],
  imports: [
    BrowserModule,
    HotTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HotTableModule } from 'angular-handsontable';
import { AppComponent } from './app.component';
import { ApplicantFormComponent } from './applicant-form/applicant-form.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddorremovedataComponent } from './addorremovedata/addorremovedata.component';
import { AppRoutingModule } from './/app-routing.module';
import { StatusComponent } from './status/status.component';
import { AffliationComponent } from './affliation/affliation.component';
import { PositionComponent } from './position/position.component';
import { AlternatepositionComponent } from './alternateposition/alternateposition.component';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [
    AppComponent,
    ApplicantFormComponent,
    SelectBoxComponent,
    InputBoxComponent,
    TextAreaComponent,
    NavbarComponent,
    AddorremovedataComponent,
    StatusComponent,
    AffliationComponent,
    PositionComponent,
    AlternatepositionComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    HotTableModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

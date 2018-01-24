import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApplicantFormComponent} from './applicant-form/applicant-form.component'
import {StatusComponent} from './status/status.component'

import { AffliationComponent } from './affliation/affliation.component';
import { PositionComponent } from './position/position.component';
import { AlternatepositionComponent } from './alternateposition/alternateposition.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  {path: '', redirectTo: '/applicantform', pathMatch: 'full' },
  {path: 'status', component: StatusComponent},
  {path: 'applicantform', component: ApplicantFormComponent},
  {path:'affliation',component:AffliationComponent},
  {path:'position',component:PositionComponent},
  {path:'alternateposition',component:AlternatepositionComponent},
  {path:'team',component:TeamComponent}
]
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})

export class AppRoutingModule { }
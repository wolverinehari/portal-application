import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApplicantFormComponent} from './applicant-form/applicant-form.component'
import {StatusComponent} from './status/status.component'
const routes: Routes = [
  {path: '', redirectTo: '/applicantform', pathMatch: 'full' },
  {path: 'status', component: StatusComponent},
  {path:'applicantform',component:ApplicantFormComponent}
]
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})

export class AppRoutingModule { }

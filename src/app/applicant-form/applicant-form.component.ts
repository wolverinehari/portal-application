import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { Selectdata } from '../selectdata';


@Component({
  selector: 'app-applicant-form',
  templateUrl: './applicant-form.component.html',
  styleUrls: ['./applicant-form.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ApplicantFormComponent implements OnInit {
  status: Selectdata = {
    id: 'status',
    name: 'Status',
    values: ['apple', 'ball', 'cat', 'door', 'elephant', 'fox','apple', 'ball', 'cat', 'door', 'elephant', 'fox','apple', 'ball', 'cat', 'door', 'elephant', 'fox','apple', 'ball', 'cat', 'door', 'elephant', 'fox']
  }
  affliation: Selectdata = {
    id: 'affliation',
    name: 'Affliation',
    values: ['apple', 'ball', 'cat', 'door', 'elephant', 'fox']
  }
  position: Selectdata = {
    id: 'position',
    name: 'Position',
    values: ['apple', 'ball', 'cat', 'door', 'elephant', 'fox']
  }
  alternateposition: Selectdata = {
    id: 'alternateposition',
    name: 'Alternate position',
    values: ['apple', 'ball', 'cat', 'door', 'elephant', 'fox']
  }
  team: Selectdata = {
    id: 'team',
    name: 'Team',
    values: ['apple', 'ball', 'cat', 'door', 'elephant', 'fox']
  }
  reviewd: Selectdata = {
    id: 'reviewd',
    name: 'Reviewd by Soyal',
    values: ['apple', 'ball', 'cat', 'door', 'elephant', 'fox']
  }
  constructor() { }
  ngOnInit() {
   
  }
}



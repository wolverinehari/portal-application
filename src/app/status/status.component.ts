import { Component, OnInit } from '@angular/core';
import { Selectdata } from '../selectdata';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  status: Selectdata = {
    id: 'status',
    name: 'Status',
    values: ['apple', 'ball', 'cat', 'door', 'elephant', 'fox','apple', 'ball', 'cat', 'door', 'elephant', 'fox','apple', 'ball', 'cat', 'door', 'elephant', 'fox','apple', 'ball', 'cat', 'door', 'elephant', 'fox']
  }

  constructor() { }

  ngOnInit() {
  }

}

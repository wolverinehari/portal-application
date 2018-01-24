import { Component, OnInit } from '@angular/core';
import { Selectdata } from '../selectdata';

@Component({
  selector: 'app-affliation',
  templateUrl: './affliation.component.html',
  styleUrls: ['./affliation.component.css']
})
export class AffliationComponent implements OnInit {
  affliation: Selectdata = {
    id: 'affliation',
    name: 'Affliation',
    values: ['apple', 'ball', 'cat', 'door', 'elephant', 'fox']
  }
  constructor() { }

  ngOnInit() {
  }

}

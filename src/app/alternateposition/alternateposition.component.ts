import { Component, OnInit } from '@angular/core';
import { Selectdata } from '../selectdata';

@Component({
  selector: 'app-alternateposition',
  templateUrl: './alternateposition.component.html',
  styleUrls: ['./alternateposition.component.css']
})
export class AlternatepositionComponent implements OnInit {
  alternateposition: Selectdata = {
    id: 'alternateposition',
    name: 'Alternate position',
    values: ['apple', 'ball', 'cat', 'door', 'elephant', 'fox']
  }
  constructor() { }

  ngOnInit() {
  }
}
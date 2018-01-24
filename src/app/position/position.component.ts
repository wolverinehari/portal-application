import { Component, OnInit } from '@angular/core';
import { Selectdata } from '../selectdata';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  position: Selectdata = {
    id: 'position',
    name: 'Position',
    values: ['apple', 'ball', 'cat', 'door', 'elephant', 'fox']
  }
  constructor() { }

  ngOnInit() {
  }

}


  
  
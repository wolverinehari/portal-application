import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {
  @Input() label:string;
  @Input() value:string;
  @Input() id:string;
  constructor() { }
  ngOnInit() {
  }

}

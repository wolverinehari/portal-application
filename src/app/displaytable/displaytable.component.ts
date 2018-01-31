import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Element} from '../tableData'

@Component({
  selector: 'app-displaytable',
  templateUrl: './displaytable.component.html',
  styleUrls: ['./displaytable.component.css']
})
export class DisplaytableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  displayColumnHeader= ['id', 'Interview date', 'Interview time', 'Interview type','Primary interviewer','Edit sec'];
  dataObject: Element[] = [{
      id: 1,
      interviewdate: '12/19/2017',
      interviewtime: '8.30AM',
      interviewtype: 'Telephonic',
      primaryinterviewer: 'Ajith'
    },
    {
      id: 2,
      interviewdate: '01/19/2018',
      interviewtime: '9.30AM',
      interviewtype: 'Skype',
      primaryinterviewer: 'Vijay'
    },
    {
      id: 3,
      interviewdate: '01/06/2018',
      interviewtime: '11.30AM',
      interviewtype: 'Direct',
      primaryinterviewer: 'Rajini'
    },
    {
      id: 4,
      interviewdate: '01/09/2018',
      interviewtime: '9.40AM',
      interviewtype: 'Skype',
      primaryinterviewer: 'Kamal'
    }
  ]
  dataSource = new MatTableDataSource<Element>(this.dataObject);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

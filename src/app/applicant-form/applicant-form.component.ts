import { Component, OnInit } from '@angular/core';
import { Selectdata } from '../selectdata';


@Component({
  selector: 'app-applicant-form',
  templateUrl: './applicant-form.component.html',
  styleUrls: ['./applicant-form.component.css']
})
export class ApplicantFormComponent implements OnInit {
  status: Selectdata = {
    id: 'status',
    name: 'Status',
    values: ['apple', 'ball', 'cat', 'door', 'elephant', 'fox']
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
   // this.renderSpreadsheet();
  }
  tableData:Object=this.renderSpreadsheet();
  renderSpreadsheet(): Object {
    var dataObject = [{
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
    ];
   var tableSettings = {
      data: dataObject,
      columns: [{
        data: 'id',
        type: 'numeric',
        width: 40
      },
      {
        data: 'interviewdate',
        type: 'date',
        dateFormat: 'MM/DD/YYYY'
      },
      {
        data: 'interviewtime',
        type: 'text'
      },
      {
        data: 'interviewtype',
        type: 'text'
      },
      {
        data: 'primaryinterviewer',
        type: 'text'
      }
      ],
      stretchH: 'all',
      width: 1024,
      autoWrapRow: true,
      height: 150,
      maxRows: 22,
      manualRowResize: true,
      manualColumnResize: true,
      rowHeaders: true,
      colHeaders: [
        'ID',
        'InterviewDate',
        'InterviewTime',
        'InterviewType',
        'PrimaryInterviewer'
      ],
      manualRowMove: true,
      manualColumnMove: true,
      contextMenu: true,
      filters: true,
      dropdownMenu: true
    };
    return tableSettings;
  }
}

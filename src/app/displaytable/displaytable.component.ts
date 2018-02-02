import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Element } from '../tableData'
import { tabledataObject } from '../constant'
import { ConstantdataService } from '../constantdata.service';


@Component({
  selector: 'app-displaytable',
  templateUrl: './displaytable.component.html',
  styleUrls: ['./displaytable.component.css']
})
export class DisplaytableComponent implements OnInit {
  dataObject: Element[];
  dataSource:any;
  constructor(constantdataService: ConstantdataService) {
    this.dataObject = constantdataService.getTables();
    this.dataSource = new MatTableDataSource<Element>(this.dataObject);
  }
  ngOnInit() {
  }
  
  displayColumnHeader = ['id', 'Interview date', 'Interview time', 'Interview type', 'Primary interviewer', 'Edit sec'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  tableContentStatusChange(data:Element){
    this.dataObject.push(JSON.parse(JSON.stringify(data)));
    //this.dataSource.data.push(data)
    this.dataSource = new MatTableDataSource<Element>(this.dataObject);
    
   //this.dataObject=this.dataSource.data;
  }
  deleteItem(id:any){
       //this.dataObject=this.dataObject.filter(item=>item.id!=id)
       this.dataSource.data=this.dataSource.data.filter(item=>item.id!=id)
     console.log('id',this.dataSource)
  }
}

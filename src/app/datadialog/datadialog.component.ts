import {Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Dialogcontent} from './dialogcontent'
import {Element} from '../tableData'
import { ConstantdataService } from '../constantdata.service';
@Component({
  selector: 'app-datadialog',
  templateUrl: './datadialog.component.html',
  styleUrls: ['./datadialog.component.css']
})
export class DatadialogComponent {

 /* animal: string;
  name: string;*/
  @Input() isEditsec:boolean;
  @Input() tableContent:any;
  @Output() tableContentStatusChange = new EventEmitter<Element>();
  @Input() itemid:Number;
 // tableContent1:Element[];
 dataObj:Element={
      id: 0,
      interviewdate: '',
      interviewtime: '',
      interviewtype: '',
      primaryinterviewer: ''
    }
  constructor(public dialog: MatDialog,public constantdataService: ConstantdataService) {
       // this.tableContent1 = constantdataService.getTables();
      
  }
  openDialog(): void {
    var data;
    if(!!this.itemid){
      // data=this.tableContent.data.filter(item=>item.id==this.itemid)[0]
        console.log(data);
    }else{
      data=this.dataObj;
        console.log(data);
      
    }
      let dialogRef = this.dialog.open(Dialogcontent, {
        width: '450px',
        data: data
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
       //this.tableContent.data.push(result);
      // this.constantdataService.setTables(this.tableContent)+
       //if()
       if(!!result){
          result.interviewdate=(result.interviewdate.getMonth()+1)+'/'+result.interviewdate.getDate()+'/'+result.interviewdate.getFullYear()//new Date(result.interviewdate.getMonth()+''+result.interviewdate.getDate(),result.interviewdate.getFullYear())
          this.tableContentStatusChange.emit(result);
       }
     //Dialogcontent.push(this.dataObj)
    });
  }

}
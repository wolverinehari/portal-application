import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'app-dialogcontent',
    templateUrl: 'dialogcontent.html',
    styleUrls: ['./dialogcontent.css']

})
export class Dialogcontent {
     constructor(public dialogRef: MatDialogRef<Dialogcontent>,@Inject(MAT_DIALOG_DATA) public data: any) { }
      interviewtype: any = {
        id: 'modalinterviewtype',
        name: 'Interview type',
        values: ['Skype', 'Telephonic', 'Direct', 'Written', 'Machine', 'Online']
     }
    onNoClick(): void {
        this.dialogRef.close();
    }
    onSubmitClick(data):void{
        console.log(data);
        this.dialogRef.close();
   }

}
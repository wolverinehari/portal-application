import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'
import { ConstantdataService } from '../constantdata.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private constantdataService: ConstantdataService) { }
  logindata: any = {
    username: '',
    password: ''
  }
  isError: boolean = false;
  ngOnInit() {
  }
  loginData(): void {
    let logincheckdata = this.constantdataService.checkvalidLogin(this.logindata)
    debugger;
    if (logincheckdata.length > 0) {
      this.router.navigate(['/applicantform']);
      this.isError = false;
    } else {
      this.isError = true;
    }
 }
  valuechange(data) {
    Object.getOwnPropertyNames(data).forEach(item => {
      this.logindata[item] = data[item];
    })
  }
}

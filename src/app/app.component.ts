import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 // title = 'app';
 islogin:boolean=window.location.pathname.indexOf('login')>=0?true:false;
  constructor(private route: ActivatedRoute) {
    console.log(this.islogin);
     //const id = +this.route.
  }
}

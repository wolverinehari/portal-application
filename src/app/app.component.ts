import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  islogin:boolean;
 constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationStart") {
        this.islogin = event.url.indexOf('login') >= 0 || event.url.length<=1 ? false : true;
        console.log(this.islogin,event);
      }
    })
     //const id = +this.route.
  }
}

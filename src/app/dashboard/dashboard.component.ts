import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    // token remove
    sessionStorage.removeItem("my-app-token");
    // go to login page
    this._router.navigateByUrl('/login');
  }

}

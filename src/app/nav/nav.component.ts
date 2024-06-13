import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public cartCount:number = 0;

  constructor(private _commonService:CommonService) { 
    _commonService.getValue().subscribe(
      (data:any)=>{
        this.cartCount = data;
      }
    )
  }

  ngOnInit(): void {
  }

}

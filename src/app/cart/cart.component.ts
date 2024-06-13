import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public name:string = "";
  public category:string = "";
  public price:number = 0;
  public rating:number = 0;
  public isFreeDelivery:boolean = false;

  public term:string = "";
  
  public products: any = [
    { name: 'mobile', category: 'gadgets', price: 10000, rating: 5, isFreeDelivery:false},
    { name: 'laptop', category: 'gadgets', price: 50000, rating: 4.5, isFreeDelivery:false},
    { name: 'tv', category: 'gadgets', price: 70000, rating: 4, isFreeDelivery:true},
    { name: 'shirt', category: 'fashion', price: 3000, rating: 3, isFreeDelivery:false},
    { name: 'pant', category: 'fashion', price: 4000, rating: 5, isFreeDelivery:false},
    { name: 'saree', category: 'fashion', price: 5000, rating: 4, isFreeDelivery:true},
    { name: 'flipflop', category: 'footware', price: 1000, rating: 3.5, isFreeDelivery:false},
    { name: 'shoes', category: 'footware', price: 3000, rating: 4.2, isFreeDelivery:false},
    { name: 'belt', category: 'accessories', price: 600, rating: 2.5, isFreeDelivery:true},
    { name: 'specs', category: 'accessories', price: 999, rating: 3.8, isFreeDelivery:false},
    { name: 'watch', category: 'accessories', price: 4000, rating: 5, isFreeDelivery:false},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  create(){
    let product = {
      name: this.name,
      category: this.category,
      price: this.price,
      rating: this.rating,
      isFreeDelivery: this.isFreeDelivery
    }
    this.products.push(product);
  }

  lowToHigh(){
    this.products = this.products.sort((a:any, b:any)=>a.price-b.price)
  }

  search(){
    this.products = this.products.filter((product:any)=>product.name.includes(this.term));
  }

}

// 1. ngModel Y
// 2. object sturcure
// 3. sno
// 4. radio button
// 5. filter
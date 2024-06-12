import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  public vehicles:any = [];
  public term:string = "";
  public page:number=1;
  public column:string = "";
  public order:string = "";

  public params:any = {
    "page":1,
    "limit":10,
    "filter":'',
    "sortBy":'',
    "order":''
  }

  constructor(private _vehicleService:VehicleService, private _router:Router) {

    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )

  }

  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        console.log("Internal server error");
      }
    )
  }

  pagination(){
    this._vehicleService.getPagedVehicles(this.page).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        console.log("Internal server error");
      }
    )
  }
  
  sort(){

    this._vehicleService.getSortedVehicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        console.log("Internal server error");
      }
    )

  }

  getData(){
    
  }

  delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("Deleted succesfully!!!");
        location.reload();
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  view(id:string){
    this._router.navigateByUrl('/dashboard/vehicle-details/'+id);
  }

  edit(id:string){
    this._router.navigateByUrl('/dashboard/edit-vehicle/'+id);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

  public vehileForm:FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl()
  })
  public id:string = "";

  constructor(private _vehicleService:VehicleService, private _activatedRoute: ActivatedRoute) {

    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;
        
        _vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehileForm.patchValue(data);
          }
        )

      }
    )
   
  }

  ngOnInit(): void {
  }

  create(){
    console.log(this.vehileForm.value);

    if(this.id){
      // edit
      this._vehicleService.editVehicle(this.id, this.vehileForm.value).subscribe(
        (data:any)=>{
          alert("Edited successfully!!!");
        },
        (err:any)=>{ 
          alert("Editing failed");
        }
      )
    }
    else{
      // create
      this._vehicleService.crateVehicle(this.vehileForm.value).subscribe(
        (data:any)=>{
          alert("Created successfully!!!");
        },
        (err:any)=>{ 
          alert("Creation failed");
        }
      )
    }
   
  }

}

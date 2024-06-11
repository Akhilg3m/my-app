import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  public vehicle:any = {};

  constructor(private _activatedRoute: ActivatedRoute, private _vehicleService:VehicleService) {

    _activatedRoute.params.subscribe(
      (data:any)=>{

        _vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle = data;
          }
        )

      }
    )
  }

  ngOnInit(): void {
  }

}

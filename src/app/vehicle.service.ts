import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClient:HttpClient) { }

  getVehicles():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page=1");
  }

  getVehicle(id:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }

  getFilteredVehicles(term:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
  }

  getPagedVehicles(page:number):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page="+page);
  }

  getSortedVehicles(column:string, order:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);
  }

  crateVehicle(data:any){
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data);
  }

  editVehicle(id:string,data:any){
    return this._httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id,data);
  }

  deleteVehicle(id:string){
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id)
  }

}


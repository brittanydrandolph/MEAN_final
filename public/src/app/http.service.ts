import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAllPets(){
    return this._http.get("/api/petsAll");
  }
  delete(id:String){
    return this._http.delete("/api/delete/"+id)
  }
  getOneFromPets(id:String){
    return this._http.get(`/api/pets/${id}`)
  }
  editPet(id:String, Editpet:object){
    return this._http.put(`/api/pets/${id}/edit`, Editpet)
  }
  addPet(newPet){
    return this._http.post("/api/addPet", newPet)
  }
}


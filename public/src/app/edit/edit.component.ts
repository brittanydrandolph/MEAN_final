import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { PetsComponent } from '../pets/pets.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  Editpet : object;

  constructor(    
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.Editpet = {'name': "", 'type': "", 'description': "", 'skillOne': "", 'skillTwo': "", 'skillThree': ""}
    this.findPet();
  }
  findPet(){
    this._route.params.subscribe((params => {
      let obs = this._httpService.getOneFromPets(params['id']);
      obs.subscribe((data: any) =>{
        console.log("got this data from find pet in viewall component", data)
        this.Editpet = data.info
      })
    }))
  }
  editSubmit(){
    this._route.params.subscribe((params) =>{
      let obs = this._httpService.editPet(params['id'], this.Editpet)
      obs.subscribe((data: any) =>{
        console.log("completed edit", data);
        this._router.navigate(["/pets/"+this.Editpet._id])
      })
    })
  }
}

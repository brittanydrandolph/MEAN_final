import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {
pet: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.pet = {'name': "", 'type': "", 'description': "", 'skillOne': "", 'skillTwo': "", 'skillThree': ""}
    this.findPet();
  }
  findPet(){
    this._route.params.subscribe((params => {
      let obs = this._httpService.getOneFromPets(params['id']);
      obs.subscribe((data: any) =>{
        console.log("got this data from find pet in viewall component", data)
        this.pet = data.info
      })
    }))
  }
  deletePet(id:String){
    console.log("got the pet to delete")
    let obs = this._httpService.delete(id);
    obs.subscribe(data => {
      console.log("deleteing pet")
      this._router.navigate(["/"])
    })
  }
}

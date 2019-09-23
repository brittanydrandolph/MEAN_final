import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPet: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newPet = {'name': "", 'type': "", 'description': "", 'skillOne': "", 'skillTwo': "", 'skillThree': ""}
  }
  newPetSubmit(){
    console.log("got to new pet submit")
    let obs = this._httpService.addPet(this.newPet);
    obs.subscribe((data: any) => {
      console.log("got to newPetSubmit function in new component", data)
      this.newPet = {'name': "", 'type': "", 'description': "", 'skillOne': "", 'skillTwo': "", 'skillThree': ""}
      this._router.navigate(["/pets"])
    })
  }
}

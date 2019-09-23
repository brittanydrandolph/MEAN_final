import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
pets = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAllPets();
  }
  getAllPets(){
    let obs = this._httpService.getAllPets();
    obs.subscribe(data => {
      console.log("Loading all pets from getAllPets in home component", data)
      this.pets = data["info"]
    })
  }
}

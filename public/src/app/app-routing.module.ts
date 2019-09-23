import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
// import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { PetsComponent } from './pets/pets.component'
import { ViewallComponent } from './viewall/viewall.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path: 'pets', component:PetsComponent},
  // {path: 'home', component: HomeComponent},
  {path: 'pets/:id/edit', component: EditComponent},
  {path: 'pets/new', component: NewComponent},
  {path: 'pets/:id', component: ViewallComponent}, //DETAILS
  {path: '', pathMatch: 'full', redirectTo: 'pets'},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

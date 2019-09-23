import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ViewallComponent } from './viewall/viewall.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PetsComponent } from './pets/pets.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    EditComponent,
    ViewallComponent,
    HomeComponent,
    PagenotfoundComponent,
    PetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

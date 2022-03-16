import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

import {HttpClientModule} from '@angular/common/http';
import { DatospersonajeComponent } from './datospersonaje/datospersonaje.component'

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    HomeComponent,
    AboutUsComponent,
    DatospersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

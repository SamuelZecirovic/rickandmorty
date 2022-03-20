import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AgregarComponent } from './agregar/agregar.component';
import { CharactersComponent } from './characters/characters.component';
import { DatospersonajeComponent } from './datospersonaje/datospersonaje.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'characters',
    component:CharactersComponent
  },
  {
    path:'characters/:id',
    component:DatospersonajeComponent
  },
  {
    path:'add',
    component:AgregarComponent
  },
  {
    path:'about',
    component:AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

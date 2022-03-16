import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-datospersonaje',
  templateUrl: './datospersonaje.component.html',
  styleUrls: ['./datospersonaje.component.css']
})
export class DatospersonajeComponent implements OnInit {

  datos:any = null;

  id:any = this.route.snapshot.paramMap.get('id');


  constructor(private charactersService: CharactersService, private route: ActivatedRoute ) {}


  ngOnInit(){
    this.charactersService.getById(this.id)
      .subscribe(result => this.datos = result)
  }

}

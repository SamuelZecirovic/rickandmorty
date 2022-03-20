import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../characters.service';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-datospersonaje',
  templateUrl: './datospersonaje.component.html',
  styleUrls: ['./datospersonaje.component.css']
})
export class DatospersonajeComponent implements OnInit {

  id:any;
  datos: Character = {
    name: '',
    species: '',
    gender: '',
    origin: '',
    image: ''
  }

  constructor(private charactersService: CharactersService, private route: ActivatedRoute, private router: Router ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.charactersService.get(this.id).subscribe(result => {
      this.datos = result;
    },
    error => {
      console.log("Errores");
    });
  }

  updateStatus(status: boolean): void {
    const data = {
      name: this.datos.name,
      gender: this.datos.gender,
      species: this.datos.species,
      origin: this.datos.origin,
      image: this.datos.image,
      status: status
    };

    this.charactersService.update(this.datos.id, data).subscribe (response => {
      this.datos.status = status;
      console.log(response);
    },
    error => {
      console.log(error);
    });
  }

  deleteCharacter(): void {
    this.charactersService.delete(this.datos.id).subscribe (response => {
      console.log(response);
      this.router.navigate(['/characters']);
    },
    error => {
      console.log(error);
    });
  }

}

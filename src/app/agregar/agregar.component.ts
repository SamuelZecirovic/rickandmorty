import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  id: any;
  personaje: Character = {
    name: '',
    gender: '',
    species: '',
    origin: '',
    image: ''
  };
  submitted = false;


  constructor(private charactersService: CharactersService ) { }

  ngOnInit(): void {
  }

  saveCharacters(): void {
    const data = {
      name: this.personaje.name,
      gender: this.personaje.gender,
      species: this.personaje.species,
      origin: this.personaje.origin,
      image: this.personaje.image
  };

    this.charactersService.create(data).subscribe(response => {
      console.log(response);
      this.submitted = true;
    },
    error => {
      console.log(error);
    });
  }

  newCharacter(): void{
    this.submitted = false;
    this.personaje = {
      name: '',
      gender: '',
      species: '',
      origin: '',
      image: ''
    }
  }

}

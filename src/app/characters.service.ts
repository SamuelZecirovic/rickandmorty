import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './models/character.model';

const baseURL = 'http://localhost:3000/characters'

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>(baseURL);
  }

  get(id: any): Observable<Character> {
    return this.http.get<Character>(`${baseURL}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseURL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseURL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseURL);
  }

  findByName(name: any): Observable<Character[]> {
    return this.http.get<Character[]>(`${baseURL}?name=${name}`);
  }


  /*    ***conexion api***
  retornar(){
    return this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5");
  }

  getById(id: string){
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`);
  }*/
}

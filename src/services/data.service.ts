import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { PokemonData, Result } from './data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public pokemonSubject = new Subject<Result[]>();

  constructor(private http: HttpClient) {}

  getPokemonSubject() {
    return this.pokemonSubject.asObservable();
  }

  fetchData(limit) {
    let data = { limit };
    this.http
      .get('https://pokeapi.co/api/v2/pokemon', { params: data })
      .subscribe(
        (data: PokemonData) => {
          this.pokemonSubject.next(data.results);
          console.log(data);
        },
        (err) => {
          console.error('Error fetching data:', err);
        }
      );
  }
}

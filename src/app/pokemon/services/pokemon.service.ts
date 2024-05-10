import { Injectable } from "@angular/core";
import { Pokemon } from "../interfaces/pokemon.interface";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    private url: string = 'http://localhost:8080/pokemon';
    public pokemon: Pokemon = {} as Pokemon;

    constructor( private http: HttpClient) {}

    search(id: string): Observable<Pokemon> {
        return this.http.get<Pokemon>(`${this.url}/${id}`);

    }
}
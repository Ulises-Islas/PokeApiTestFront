import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pokemon-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  pokemonId: string = '';
  error: boolean = false;
  pokemon: Pokemon = {} as Pokemon;

  constructor(private service: PokemonService) {}

  search(e: string) {
    this.pokemonId = e;
    this.error = false;
    if (this.pokemonId.trim() === '') {
      this.error = true;
      return;
    }
    this.service.search(this.pokemonId).subscribe(res => {
      this.pokemon = res;
    }, (err) => {
      this.error = true;
      this.pokemon = {} as Pokemon;
    });
  }

  sugest(e: string) {
    this.error = false;
  }

}

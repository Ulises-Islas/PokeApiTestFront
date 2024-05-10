import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
})
export class PokemonCardComponent {

  @Input()
  pokemon: Pokemon = {} as Pokemon;

}

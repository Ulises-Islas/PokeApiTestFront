export interface Pokemon {
    id:         number;
    name:       string;
    weight:     number;
    height:     number;
    abilities:  PokemonAbility[];
    sprite:     string;
    is_default: boolean;
}

export interface PokemonAbility {
    ability:   Ability;
    is_hidden: boolean;
}

export interface Ability {
    name: string;
    url:  string;
}
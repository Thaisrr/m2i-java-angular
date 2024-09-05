import { Component } from '@angular/core';
import {PokemonCardComponent} from "../../components/pokemon-card/pokemon-card.component";
import {FormsModule} from "@angular/forms";
import {User} from "../../utils/types/user.type";
import {UserCardComponent} from "../../components/user-card/user-card.component";
import {ButtonComponent} from "../../components/button/button.component";
import {CounterComponent} from "../../components/counter/counter.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    PokemonCardComponent,
    FormsModule,
    UserCardComponent,
    ButtonComponent,
    CounterComponent
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  pokemon = 'Bulbizarre';
  pokemons = ['Dracofeu', 'Ronflex', 'Pikachu', 'Lieviatan'];

  users: User[] = [
    {lastname: 'La Tourte', firstname: 'Jean Michel', email: 'jeanmiche@mail.fr'},
    {lastname: 'La Tourtel', firstname: 'Jean Micheline', email: 'jeanmiche@mail.fr'},
  ]

  counter = 10;

  sayHi(msg: string) {
    console.log(msg)
  }

  modifyCounter(newValue: number) {
    this.counter = newValue;
  }
}

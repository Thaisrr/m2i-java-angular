import { Component } from '@angular/core';
import {count} from "rxjs";
type days = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.css'
})
export class BlocksComponent {

  isLogged = false;
  today: days  = 'Tuesday';
  fruits = ['pomme', 'poire', 'abricot', 'pêche'];

  user = {
    name: 'Jean Michel'
  }


  toggleLogged() {
    this.isLogged = !this.isLogged;
  }

  protected readonly count = count;
  protected readonly name = name;
}

import { Component } from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {

  name = "Jean Michel";
  isLogged = false;
  galaxy = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQYcEN8FX65k2D6A43-4aOmusLCQFLSrztQ&s';
  description = 'Un chat galactique';
  color = 'red';
  size = 30;
  myStyle = {
    backgroundColor: 'aqua',
    textDecoration: 'underline',
  }

  maClasseA = 'blue';
  maClasseB = 'red';

  toggleLogged() {
    this.isLogged = !this.isLogged;
  }
}

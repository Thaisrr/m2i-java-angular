import { Component } from '@angular/core';
import {DatePipe, DecimalPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DecimalPipe,
    DatePipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  message = "Hello World";
  pi = Math.PI;
  today = new Date();
}

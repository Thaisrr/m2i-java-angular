import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {

  message: string = 'Coucou';
  message2: string = '';
  user = {
    name: '',
    email: '',
    password: '',
  }
  isSubmitted = false;

  updateMessage(e: Event) {
    const input = e.target as HTMLInputElement;
    this.message = input.value;
  }

  get passwordHasError() {
    return this.isSubmitted &&  this.user.password.length < 6;
  }

  submitUser() {
    this.isSubmitted = true;
    if(!this.passwordHasError) {
      console.log(this.user);
    }
  }


}

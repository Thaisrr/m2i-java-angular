import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {

  /***** Template driven forms *****/
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

  /****** Reactive Forms ******/

  book_control = new FormControl(``, [
    Validators.required,
    Validators.minLength(2),
    Validators.pattern(/^[A-Za-z0-9éîïè'].*/)
  ]);

  saveBook() {
    if(this.book_control.valid) {
      console.log(`Livre sauvegardé`, this.book_control.value);
      this.book_control.reset();
    }
  }

  /*** Form Group ****/

  formation_form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    duration: new FormControl(5, [
      Validators.min(1),
      Validators.max(10)
    ]),
    trainer: new FormGroup({
      firstname: new FormControl('Jean Michel'),
      lastname: new FormControl('La Tourte')
    }),
    modules: new FormArray([
      new FormControl(''),
      new FormControl('')
    ])
  });

  get title() {
    return this.formation_form.controls.title;
  }

  get duration() {
    return this.formation_form.controls.duration;
  }

  get modules() {
    return this.formation_form.controls.modules;
  }

  addModule() {
    this.modules.push(new FormControl(''))
  }


  saveFormation() {
    if(this.formation_form.valid) {
      console.log('Sauvegarde de la formation', this.formation_form.value);
      this.formation_form.reset();
    }
  }

}

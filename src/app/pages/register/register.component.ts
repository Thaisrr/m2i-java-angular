import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../utils/services/auth.service";
import {Router} from "@angular/router";
import {AlertService} from "../../utils/services/alert.service";
import {User} from "../../utils/types/user.type";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
  })

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {
  }

  handleSubmit() {
    const user = this.form.value as User;
    this.authService.register(user)
      .subscribe({
        next: (res) => {
          if(res) {
            this.alertService.create({text: "Vous êtes bien enregistré.e !"})
            this.router.navigate(['/login'])
          }
        }
      })
  }
}

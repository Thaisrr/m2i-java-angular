import {Component, Input} from '@angular/core';
import {User} from "../../utils/types/user.type";
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-user-card[user]',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input() user!: User;

}

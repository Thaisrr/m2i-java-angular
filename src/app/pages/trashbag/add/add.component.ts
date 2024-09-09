import { Component } from '@angular/core';
import {TrashBag} from "../../../utils/types/trash.type";
import {TrashbagService} from "../../../utils/services/trashbag.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  bag: Omit<TrashBag, 'id'> = {
    name: '',
    capacity: 0,
    hasLace: false
  }

  constructor(private trashService: TrashbagService) {
  }

  handleSubmit() {
    this.trashService.create(this.bag)
      .subscribe()
  }

}

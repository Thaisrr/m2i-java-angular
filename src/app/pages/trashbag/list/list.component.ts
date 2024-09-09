import {Component, OnInit} from '@angular/core';
import {TrashbagService} from "../../../utils/services/trashbag.service";
import {TrashBag} from "../../../utils/types/trash.type";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  trashbags: TrashBag[] = [];

  constructor(private trashService: TrashbagService) {}

  ngOnInit() {
    this.trashService.getAll().subscribe({
      next: tb => this.trashbags = tb,
    })
  }

}

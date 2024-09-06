import {Component, OnInit} from '@angular/core';
import {FormationService} from "../../utils/services/formation.service";
import {Formation} from "../../utils/types/formation.type";

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [],
  templateUrl: './formations.component.html',
  styleUrl: './formations.component.css'
})
export class FormationsComponent implements OnInit{
  formations: Formation[] = [];

  constructor(private formationService: FormationService) {}

  ngOnInit() {
    this.formations = this.formationService.formations;
  }


}

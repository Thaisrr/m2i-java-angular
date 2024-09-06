import { Injectable } from '@angular/core';
import {Formation} from "../types/formation.type";

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  formations: Formation[] = [];

  constructor() {
    const stored = localStorage.getItem('formations');
    if(stored) {
      this.formations = JSON.parse(stored)
    }
  }

  addFormation(formation: Formation) {
    this.formations.push(formation);
    localStorage.setItem('formations', JSON.stringify(this.formations))
  }

}

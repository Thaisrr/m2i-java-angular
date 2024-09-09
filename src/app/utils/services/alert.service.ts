import { Injectable } from '@angular/core';
import {AlertType, Level} from "../types/alert.type";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alerts: AlertType[] = [];
  alerts$ = new BehaviorSubject<AlertType[]>(this.alerts)



  constructor() { }

  create({text, level = 'success', duration = 5000} : AlertType) {
    const alert = {text, level, duration};
    this.alerts.push(alert);
    this.alerts$.next(this.alerts);
    setTimeout(() => this.remove(alert), duration)

  }

  remove(alert: AlertType) {
    const index = this.alerts.findIndex(a => a === alert);
    this.alerts.splice(index, 1);
    this.alerts$.next(this.alerts);
  }
}

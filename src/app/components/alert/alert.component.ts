import {Component, OnInit} from '@angular/core';
import {AlertService} from "../../utils/services/alert.service";
import {AlertType} from "../../utils/types/alert.type";

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit{
  alerts: AlertType[] = [];

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.alerts$.subscribe({
      next: (value) => this.alerts = value,
    })
  }

}

import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";
import {AlertService} from "../../../utils/services/alert.service";

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent implements OnInit{

  subject$ = new Subject<string>(); // Ne prend pas de valeur par défaut;
  behaviour$ = new BehaviorSubject<string>('Coucou, je suis un behaviour subject');
  replay$ = new ReplaySubject<string>();

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {

    this.subject$.next('Hello World');
    this.behaviour$.next('Valeur 2');
    this.replay$.next('Valeur 1')
    this.replay$.next('Valeur 2')
    this.replay$.next('Valeur 3')
    this.replay$.next('Valeur 4')

    this.subject$.subscribe({
      next: (value) => console.log('Subject', value),
    });

    this.behaviour$.subscribe({
      next: (value) => console.log('Behaviour subject', value),
    });

    this.replay$.subscribe({
      next: value => console.log('Replay Subject', value)
    })

    this.subject$.next('Coucou');
    this.subject$.next('Encore une valeur');
    this.behaviour$.next('Valeur 3');
    this.replay$.next('Valeur 5 - après souscription')

    this.alertService.create({text: 'Hello Le monde !'})
    this.alertService.create({text: 'Hello Le monde !', level: 'warning'})
    this.alertService.create({text: 'Hello Le monde !', level: 'success'})
    this.alertService.create({text: 'Hello Le monde !', level: 'error'})
  }

}

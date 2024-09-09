import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {
  catchError, debounceTime,
  distinct, distinctUntilChanged,
  filter,
  finalize,
  fromEvent,
  interval,
  map,
  Observable,
  of,
  Subscription,
  take,
  tap
} from "rxjs";

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent implements OnInit, OnDestroy, AfterViewInit{
  donnee?: string;
  donnees : string[] = [];

  data$ = new Observable<string>(observer => {
    observer.next('Hello World')
    observer.next('Coucou le monde')
    //observer.error(new Error(`C'est cassé !`))
    observer.next('Holà !')
    observer.complete();
    observer.next('Rien à voir ici !')
  });

  interval$ = interval(1000); // envoie un nombre toutes les secondes
  subscription?: Subscription;

  books$ = of(
    {title: 'Frankenstein', author: 'Mary Shelley', dispo: true},
    {title: 'Frankenstein', author: 'Mary Shelley', dispo: true},
    {title: 'Bilbo le Hobbit', author: 'Tolkien', dispo: false},
    {title: 'Le Silmarillion', author: 'Tolkien', dispo: true},
    {title: "L'Assassin Royal", author: 'Robin Hobb', dispo: true},
    {title: 'Frankenstein', author: 'Marie Shelley', dispo: true},
    {title: 'Livre chiant 1', author: 'Marie Shelley', dispo: false},
    {title: 'Livre chiant 2', author: 'Marie Shelley', dispo: true},
    {title: 'Livre chiant 3', author: 'Marie Shelley', dispo: false},
    {title: 'Livre chiant 4', author: 'Marie Shelley', dispo: true},
    {title: 'Livre chiant 5', author: 'Marie Shelley', dispo: true},
    {title: 'Livre chiant 6', author: 'Marie Shelley', dispo: true},
  )

  books:string[] = [];

  @ViewChild('input_value') input!: ElementRef;

  ngOnInit() {
    this.data$.subscribe({
      next: (value) => {
        console.log('Nouvelle donnée reçue', value);
        this.donnee = value;
        this.donnees.push(value);
      },
      error: (err) => alert(`Erreur : ${err?.message}`),
      complete: () => console.log(`Fin de l'observable, cause: complete`)
    });

    this.subscription = this.interval$.subscribe({
      next: (value) => console.log('Interval : ', value)
    });

    this.books$
      .pipe(
        filter(book => book.dispo),
        take(6),
        distinct(book => book.title),
        map(book => `${book.title}, ${book.author}, ${book.dispo? 'dispo' : 'pas dispo'}`),
        tap(book => console.log('Ne retourne rien, pour agir')),
        finalize(() => console.log(`Fin de l'observable ( error ou complete )`)),
        catchError((err) => {
          alert(`Une erreur est survenue ${err?.message}`)
          return of(null)
        })
      ).subscribe({
      next: (book) => {
        if(book) {
          this.books.push(book)
        }
      }
    })
  }

  ngAfterViewInit() {
    fromEvent<InputEvent>(this.input.nativeElement, 'input')
      .pipe(
        // TODO: trouver une manière de rendre ça plus beau
        map((event) => {
          const input = event.target as HTMLInputElement;
          return input.value;
        }),
        map(value => value.trim()),
        debounceTime(1000),
        distinctUntilChanged()
      ).subscribe({
      next: val => console.log('input value : ', val)
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}

import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css'
})
export class HttpComponent implements OnInit{

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: res => console.log(res),
        error: (err) => console.error('Erreur ! ', err?.message),
        complete: () => console.log('Données récupérées')
      })
  }

}

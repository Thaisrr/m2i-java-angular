import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {catchError, Observable, of} from "rxjs";
import {TrashBag} from "../types/trash.type";
import {AlertService} from "./alert.service";

@Injectable({
  providedIn: 'root'
})
export class TrashbagService {
  apiUrl = environment.apiUrl + '/trashBags';

  constructor(private http: HttpClient, private alertService: AlertService) { }

  getAll(): Observable<TrashBag[]> {
    return this.http.get<TrashBag[]>(this.apiUrl).pipe(
      catchError(err => {
        this.alertService.create({
          text: err?.message || 'Une erreur est survenue',
          level: "error"
        });
        return of([])
      })
    )
  }

  getOne(id: string): Observable<TrashBag> {
    return this.http.get<TrashBag>(`${this.apiUrl}/${id}`).pipe(
      catchError(err => {
        this.alertService.create({
          text: err?.message || 'Une erreur est survenue',
          level: "error"
        });
        return of()
      })
    )
  }

  create(trashBag: Omit<TrashBag, 'id'>): Observable<TrashBag> {
    return this.http.post<TrashBag>(this.apiUrl, trashBag ).pipe(
      catchError(err => {
        this.alertService.create({
          text: err?.message || 'Une erreur est survenue',
          level: "error"
        });
        return of()
      })
    )
  }

  update(trashBag: Partial<TrashBag>, id: string): Observable<TrashBag> {
    return this.http.patch<TrashBag>(`${this.apiUrl}/${id}`, trashBag).pipe(
      catchError(err => {
        this.alertService.create({
          text: err?.message || 'Une erreur est survenue',
          level: "error"
        });
        return of()
      })
    )
  }

  remove(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`).pipe(
      catchError(err => {
        this.alertService.create({
          text: err?.message || 'Une erreur est survenue',
          level: "error"
        });
        return of(false)
      })
    )
  }





}

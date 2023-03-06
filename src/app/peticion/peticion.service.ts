import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Peticion } from './peticion';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  private apiURL = "http://127.0.0.1:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/peticiones/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(peticion: any): Observable<any> {
    return this.httpClient.post(this.apiURL + '/peticiones/create', JSON.stringify(peticion), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/peticiones/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id: number, peticion: Peticion): Observable<any> {
    return this.httpClient.put(this.apiURL + '/peticiones/' + id, JSON.stringify(peticion), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: number) {
    return this.httpClient.delete(this.apiURL + '/peticiones/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

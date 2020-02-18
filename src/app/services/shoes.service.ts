import { Injectable } from '@angular/core';
import {Shoes} from "../models/shoes";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ShoesService {
shoes: Shoes[];
apiURL = "http://localhost:3000/chaussure"
  constructor(private http: HttpClient) {

  }
  getShoeByID(id: number): Observable<Shoes> {
  return this.http.get<Shoes>(this.apiURL+'/'+ id).pipe(
    retry(1),
    catchError(this.handleError)
  )
  }
  getAllShoes(): Observable<Shoes[]> {
  return this.http.get<Shoes[]>(this.apiURL).pipe(retry(1), catchError(this.handleError)
  );
  }
  add(shoe: Shoes): Observable<Shoes> {
    return this.http.post<Shoes>(this.apiURL, shoe).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  edit(shoesToEdit: Shoes): Observable<Shoes> {
    return this.http.put<Shoes>(this.apiURL+'/'+shoesToEdit.id, shoesToEdit).pipe(retry(1), catchError(this.handleError)
    );
  }
  deleteShoe(id: number): Observable<Shoes>  {
      return this.http.delete<Shoes>(this.apiURL+'/'+ id).pipe(retry(1), catchError(this.handleError)
      );
  }

  handleError(error) {
  let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }else {
      errorMessage = `Error Code ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

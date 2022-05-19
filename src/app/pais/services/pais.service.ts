import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private BASE_URL: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.BASE_URL}/name/${termino}`;
    return this.http.get<Country[]>(url);
    /* .pipe(catchError((err) => of([]))); */
  }
  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.BASE_URL}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }
  buscarRegion(termino: string): Observable<Country[]> {
    const url = `${this.BASE_URL}/region/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorId(id: string): Observable<Country> {
    const url = `${this.BASE_URL}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}

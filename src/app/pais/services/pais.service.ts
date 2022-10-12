import { tap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private BASE_URL: string = 'https://restcountries.com/v2';
  private get httpParams() {
    return new HttpParams().set(
      'fields',
      'name,capital,alpha2Code,flag,population'
    );
  }

  constructor(private http: HttpClient) {}

  buscarPais(pais: string): Observable<Country[]> {
    const url = `${this.BASE_URL}/name/${pais}`;
    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(tap(console.log));
    /* .pipe(catchError((err) => of([]))); */
  }
  buscarCapital(capital: string): Observable<Country[]> {
    const url = `${this.BASE_URL}/capital/${capital}`;
    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(tap(console.log));
  }
  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this.BASE_URL}/region/${region}`;
    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(tap(console.log));
  }

  getPaisPorId(id: string): Observable<Country> {
    const url = `${this.BASE_URL}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}

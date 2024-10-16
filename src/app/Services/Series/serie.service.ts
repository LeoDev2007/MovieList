import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private apiKey = '7e12dfe0e781b7ed00c0ee92dce225ee'
  private apiUrl = 'https://api.themoviedb.org/3/tv/popular'

  constructor(private http: HttpClient) { }

  getSeries(page: number = 1): Observable<any>{
    const url = `${this.apiUrl}?api_key=${this.apiKey}&page=${page}`
    return this.http.get<any>(url)
  }
}

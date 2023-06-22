import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  private URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  login(user: object) {
    return this.http.post<any>(this.URL + '/', user);
  }
}

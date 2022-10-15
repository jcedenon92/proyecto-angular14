import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const HEADER = new HttpHeaders({
      Authorization: `Basic ${btoa(`${email}:${password}`)}`,
    });

    const uri = `${environment.baseUrlRestaurantAdmin}/auth`;
    return this.http.post<any>(uri, {}, { headers: HEADER });
  }
}

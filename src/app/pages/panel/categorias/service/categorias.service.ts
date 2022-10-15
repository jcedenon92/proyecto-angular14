import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategorias } from '../interfaces/categorias';

//Al borrar el privdedIn, se debe importar en el module más cercano.
@Injectable({
  providedIn: 'root', //lo importa desde la raiz del module
})
export class CategoriasService {
  constructor(private http: HttpClient) {}

  get getToken(): string {
    return localStorage.getItem('token') || '';
  }

  listar(): Observable<ICategorias[]> {
    const HEADER = new HttpHeaders({
      token: this.getToken,
    });
    const uri = `${environment.baseUrlRestaurantAdmin}/categories`;
    return this.http.get<ICategorias[]>(uri, { headers: HEADER });
  }
}

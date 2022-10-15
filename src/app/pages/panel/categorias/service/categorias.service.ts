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
  private header: HttpHeaders;
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      token: this.getToken,
    });
  }

  get getToken(): string {
    return localStorage.getItem('token') || '';
  }

  listar(): Observable<ICategorias[]> {
    const uri = `${environment.baseUrlRestaurantAdmin}/categories`;
    return this.http.get<ICategorias[]>(uri, { headers: this.header });
  }

  eliminar(id: string) {
    const uri = `${environment.baseUrlRestaurantAdmin}/categories/${id}`;
    return this.http.delete<any>(uri, { headers: this.header });
  }
}

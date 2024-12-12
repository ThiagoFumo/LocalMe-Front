import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { RegistrarseComponent } from '../registrarse/registrarse.component';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import { PaginaMainComponent } from '../pagina-main/pagina-main.component';
import { AdministracionComponent } from '../administracion/administracion.component';
import { IUsuario } from '../usuario/usuario.interface';

@Injectable({
  providedIn: 'root'
})

export class dataService {
  private apiURL = 'http://127.0.0.1:3000';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  //-----------------------------------------------

  addUsuario(usuario : IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(`${this.apiURL}/api/users/create`, usuario, { headers: this.headers });
  }

  modUsuario(idUsuario : number, usuario : IUsuario): Observable<IUsuario> {
    return this.http.put<IUsuario>(`${this.apiURL}/api/users/${idUsuario}/update`, usuario, { headers: this.headers });
  }

  deleteUsuario(idUsuario : number): Observable<IUsuario> {
    return this.http.delete<IUsuario>(`${this.apiURL}/api/users/${idUsuario}/delete`);
  }

  getAllUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(`${this.apiURL}/api/users/all`);
  }
}
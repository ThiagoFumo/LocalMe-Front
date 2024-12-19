import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { RegistrarseComponent } from '../registrarse/registrarse.component';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import { PaginaMainComponent } from '../pagina-main/pagina-main.component';
import { AdministracionComponent } from '../administracion/administracion.component';
import { IUsuario } from '../usuario/usuario.interface';
import { IPost } from '../post/post.interface';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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

  getAdmins(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiURL}/api/admin/all`);
  }

  //-----------------------------------------------

  addPost(post : IPost): Observable<IPost> {
    return this.http.post<IPost>(`${this.apiURL}/api/posts/create`, post, { headers: this.headers });
  }

  modPost(idPost : number, post : IPost): Observable<IPost> {
    return this.http.put<IPost>(`${this.apiURL}/api/posts/${idPost}/update`, post, { headers: this.headers });
  }

  deletePost(idPost : number): Observable<IPost> {
    return this.http.delete<IPost>(`${this.apiURL}/api/posts/${idPost}/delete`);
  }

  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.apiURL}/api/posts/all`);
  }
}
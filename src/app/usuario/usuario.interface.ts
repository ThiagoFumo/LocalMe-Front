import { Injectable } from "@angular/core";

export interface IUsuario {
    nombre : string;
    correo : string;
    edad : number; 
    password : string;
    
    idPosts : number[];
    idUsuario? : number;
}

@Injectable({
    providedIn: 'root',
  })
  
  export class UserService {
    private storageKey = 'loggedInUser';
    private tokenKey = 'authToken';
  
    setUsuario(usuario: IUsuario): void {
      sessionStorage.setItem(this.storageKey, JSON.stringify(usuario));
      //sessionStorage.setItem(this.tokenKey, token);
    }
  
    getUsuario(): IUsuario | null {
      const userData = sessionStorage.getItem(this.storageKey);
      return userData ? JSON.parse(userData) : null;
    }

    getToken(): string | null {
      return sessionStorage.getItem(this.tokenKey);
    }
  
    borrarUsuario(): void {
      sessionStorage.removeItem(this.storageKey);
      sessionStorage.removeItem(this.tokenKey);
    }
  }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { IUsuario } from '../usuario/usuario.interface';
import { dataService } from '../services/services.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../usuario/usuario.interface';

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css',
})
export class RegistrarseComponent {
  logito = 'assets/logo/logito.png';
  logo = 'assets/logo/logo.png';
  patron = 'assets/logo/patron.png';
  

  nombre: string = "";
  correo: string = "";
  edad: number = 0;
  password: string = "";
  idPosts: Array<number> = [];

  constructor(private dataService: dataService, private router: Router, private userService: UserService) {}

  addUsuario(event: Event, nombreV2: string, correoV2: string, edadV2: number, passwordV2: string): void {
    event.preventDefault();    
    const usuario: IUsuario = {
      nombre: nombreV2,
      correo: correoV2,
      edad: edadV2,
      password: passwordV2,
      idPosts: [],
      idUsuario: 0
    };

    if(nombreV2 == "" || correoV2 == "" || edadV2 < 16 || passwordV2 == ""){
      console.log("[ERROR]: Campos vacíos o incorrectos");
      return;
    }else{
      if(this.checkUsuario(usuario) == true){
        console.log("Error al añadir usuario. YA EXISTE")
      }else{
        console.log("Añadiendo usuario...");
        console.log("Nombre: ", nombreV2);
        console.log("Correo: ", correoV2);
        console.log("Edad: ", edadV2);
        console.log("Password: ", passwordV2);
  
        this.dataService.addUsuario(usuario).subscribe((data) => {
          console.log("Usuario añadido: ", data);
        });
        
        this.userService.setUsuario(usuario);
        this.router.navigate(['/main']);
      }
    }
    }

  checkUsuario(usuario: IUsuario) : boolean{
    var usuarios : IUsuario[] = [];
    this.dataService.getAllUsuarios().subscribe((data: IUsuario[]) => {
      usuarios = data;
    });
    for(let i = 0; i < usuarios.length; i++){
      if(usuarios[i].nombre == usuario.nombre || usuarios[i].correo == usuario.correo){
        return true;
      }
    }
    return false;
  }
}
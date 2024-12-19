import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { dataService } from '../services/services.component';
import { IUsuario } from '../usuario/usuario.interface';
import { UserService } from '../usuario/usuario.interface';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
  logito = 'assets/logo/logito.png';
  logo = 'assets/logo/logo.png';
  patron = 'assets/logo/patron.png'; 
  
  correo: string = "";
  password: string = "";

  constructor(private dataService: dataService, private router : Router, private userService: UserService) {this.correo = "", this.password = "";}

  mainUsuario(event : Event, correoV2 : string, passwordV2: string): void{
    event.preventDefault();

    if(this.checkUsuario(correoV2, passwordV2) == true){
      this.router.navigate(['/main']);
    }else{
      console.log("[ERROR]: Correo o contraseña incorrectos");
      return;
    }
  }

  checkUsuario(correo: string, password: string) : boolean{
    var usuarios : IUsuario[] = [];

    this.dataService.getAllUsuarios().subscribe((data: IUsuario[]) => {
      usuarios = data;
    });

    for(let i = 0; i < usuarios.length; i++){
      if(usuarios[i].correo == correo && usuarios[i].password == password){
        console.log("[UPDATE]: Usuario encontrado");
        this.userService.setUsuario(usuarios[i]);
        return true;
      }
    }
    return false;
  }

  
}

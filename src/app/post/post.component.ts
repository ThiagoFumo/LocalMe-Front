import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { dataService } from '../services/services.component';
import { IUsuario } from '../usuario/usuario.interface';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{

  pais : string;
  provincia : string;
  ciudad : string;
  actividad : Array<string> = [];
  descripcion : string;
  creador : IUsuario;

  constructor(private dataService: dataService) { this.pais = "", this.provincia = "", this.ciudad = "", this.actividad = [], this.descripcion = "", this.creador = {nombre: "", correo: "", edad: 0, password: "", hobbies: [], admin: false}; }

  ngOnInit(): void {
      
  }
}

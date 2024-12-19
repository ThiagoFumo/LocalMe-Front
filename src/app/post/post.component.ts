import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { dataService } from '../services/services.component';
import { IUsuario } from '../usuario/usuario.interface';

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{

  titutlo: string;
  pais : string;
  provincia : string;
  ciudad : string;
  actividad : Array<string> = [];
  descripcion : string;
  idPosts: Array<number> = [];
  creador : IUsuario;


  constructor(private dataService: dataService) { this.titutlo = "", this.pais = "", this.provincia = "", this.ciudad = "", this.actividad = [], this.descripcion = "", this.idPosts = [], this.creador = {nombre: "", correo: "", edad: 0, password: "", idPosts: [], idUsuario: 0}; }

  ngOnInit(): void {
      
  }
}

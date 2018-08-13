import { Component, OnInit, Injectable } from '@angular/core';
import {UsuarioService} from './../usuario.service'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
  serviceUsuario : UsuarioService ;

  constructor() {
    this.serviceUsuario.listaUsuarios();
   }
 
  ngOnInit() {
  }

}

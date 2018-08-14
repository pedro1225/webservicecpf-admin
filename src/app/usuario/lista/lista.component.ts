import { Component, OnInit, Injectable } from '@angular/core';
import {UsuarioService} from './../usuario.service'
import { Endereco } from '../Endereco';
import { Observable } from '../../../../node_modules/rxjs';
import { ThrowStmt } from '../../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
 private end : Endereco;

  constructor(  public serviceUsuario : UsuarioService){}
 
  ngOnInit() 
  {
     let response : Observable<Endereco>  = this.serviceUsuario.listaUsuarios();
     response.subscribe ( (x:Endereco) => this.end = x);
      


     
  }

}

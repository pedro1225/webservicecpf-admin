import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { UsuarioService } from './usuario.service';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ListaComponent,
    HttpClient
  ],
  declarations: [ListaComponent],
  providers :[
    UsuarioService
  ]
})
export class UsuarioModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule,
    ListaComponent
  ],
  declarations: [ListaComponent]
})
export class UsuarioModule { }

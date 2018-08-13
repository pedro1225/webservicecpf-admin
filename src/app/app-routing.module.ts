import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './usuario/lista/lista.component';

const routes: Routes = [
  { path: 'usuarios', component: ListaComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],

  exports: [ RouterModule ]
})
export class AppRoutingModule { }

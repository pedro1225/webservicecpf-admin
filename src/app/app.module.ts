import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListaComponent } from './usuario/lista/lista.component';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioService } from './usuario/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

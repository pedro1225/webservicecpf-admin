import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Endereco } from './Endereco';

const httpOptions =
{
  heads: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService 
{
  private url: string = "https://viacep.com.br/ws/01001000/json";

  public listaUsuarios(): Observable<Endereco>
  {
   return this.http.get<Endereco>(this.url);
  }

  constructor(private http: HttpClient) { }
}

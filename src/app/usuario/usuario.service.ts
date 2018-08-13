import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService 
{
  private url:string = "http://viacep.com.br/ws/72631109/json/ ";
  private httpOptions =
  {
    'Content-Type': 'application/json'
  };
  

  public listaUsuarios() : any
  {
     return this.http.get(this.url);
  }

  constructor(private http:HttpClient) { }
}

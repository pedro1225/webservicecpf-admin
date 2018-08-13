import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

const  httpOptions =
  {
    heads : new HttpHeaders({'Content-Type': 'application/json'}) 
  };

@Injectable({
  providedIn: 'root'
})
export class UsuarioService 
{
  private url:string = "http://viacep.com.br/ws/72631109/json/ ";
  
  

  public listaUsuarios() : any
  {

     return this.http.get<Object>(this.url);
  }

  constructor(private http:HttpClient) { }
}


import { Component } from '@angular/core'
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webservice-cpf-admin';


  constructor()
  {
      log("AppComponent Criado");
  } 

}

import { Component } from '@angular/core';
import { ParametrosService } from './servicio/parametros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   *
   */
  constructor(private srv:ParametrosService) {
    

  }
  title = 'guar';


  cambiar(){
    this.srv.pasa = !this.srv.pasa ;
        console.log(this.srv.pasa);
  }
}



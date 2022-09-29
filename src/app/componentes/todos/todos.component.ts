import { Component, OnInit } from '@angular/core';
import { ParametrosService } from 'src/app/servicio/parametros.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(srv:ParametrosService) {
      console.log(srv.pasa);

   }

  ngOnInit(): void {
  }

}

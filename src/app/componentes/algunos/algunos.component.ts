import { Component, OnInit } from '@angular/core';
import { ParametrosService } from 'src/app/servicio/parametros.service';

@Component({
  selector: 'app-algunos',
  templateUrl: './algunos.component.html',
  styleUrls: ['./algunos.component.css']
})
export class AlgunosComponent implements OnInit {


  constructor(srv:ParametrosService) {
    console.log(srv.pasa);
  }

  ngOnInit(): void {
  }

}

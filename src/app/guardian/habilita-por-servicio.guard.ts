import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NosaleComponent } from '../componentes/nosale/nosale.component';
import { ParametrosService } from '../servicio/parametros.service';

@Injectable({
  providedIn: 'root'
})
export class HabilitaPorServicioGuard implements CanActivate , CanDeactivate<NosaleComponent> {
  
 
  constructor(public servicio:ParametrosService) {
    
    
  }
  
canDeactivate(
  component: NosaleComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot): boolean{

    return this.servicio.pasa;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{


    return this.servicio.pasa;
  }
  
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ParametrosService } from '../servicio/parametros.service';

@Injectable({
  providedIn: 'root'
})
export class HabilitaPorServicioGuard implements CanActivate {
  
 
  constructor(public servicio:ParametrosService) {
    
    
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{


    return this.servicio.pasa;
  }
  
}

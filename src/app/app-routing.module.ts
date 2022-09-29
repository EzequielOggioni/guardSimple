import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlgunosComponent } from './componentes/algunos/algunos.component';
import { TodosComponent } from './componentes/todos/todos.component';
import { HabilitaPorServicioGuard } from './guardian/habilita-por-servicio.guard';

const routes: Routes = [
  {path:'todos', component: TodosComponent  },
  {path:'algunos', component: AlgunosComponent , canActivate:[HabilitaPorServicioGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './componentes/todos/todos.component';
import { AlgunosComponent } from './componentes/algunos/algunos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AlgunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

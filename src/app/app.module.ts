import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListadoUsuariosComponent,
    UsuarioDetalleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

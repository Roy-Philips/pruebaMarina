import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})
export class ListadoUsuariosComponent {

  listado?: any[];
  tipo = 'empleado';

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit():void {
    this.listado = this.usuarioService.getLista();
    console.log(this.listado);
  }

  cambioTipo(value: any): void {
    this.tipo = value.target.value;
    this.listado = this.usuarioService.getLista().filter(empleado => empleado.nombreInstitucion !== undefined)

  }
}

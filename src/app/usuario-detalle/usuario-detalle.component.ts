import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../usuario.service';


export interface IUsuario {
  nifPass: string,
  nombre: string,
  apellido1: string,
  apellido2: string,
  genero: string,
  fechaNacimiento: string, 
  calle: string,
  numero: number,
  puerta: string,
  codigoPostal: number,
  ciudad: string
}

export interface demandante extends IUsuario {
  estudios: [{
    nombreInstitucion: string,
    titulacion:string,
    fecha: string,
  }]  
}

export interface empleado extends IUsuario {
  experienciaLaboral: [{
    nombreEmpresa: string,
    puestroTrabajo: string,
    fecha: string
  }]
}

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.scss']
})
export class UsuarioDetalleComponent {

  usuarioForm = new FormGroup({
    nifPass: new FormControl(''),
    nombre: new FormControl(''),
    apellido1: new FormControl(''),
    apellido2: new FormControl(''),
    genero: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    calle: new FormControl(''),
    numero: new FormControl(''),
    puerta: new FormControl(''),
    codigoPostal: new FormControl(''),
    nombreInstitucion: new FormControl(''),
    titulacion: new FormControl(''),
    fechaTitulacion: new FormControl(''),
    nombreEmpresa: new FormControl(''),
    puestoTrabajo: new FormControl(''),
    fechaTrabajo: new FormControl(''),
    tipoEmpleado: new FormControl('')
  })
 
  tipoFormulario = 'empleado'

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {

    
  }

  guardar():void {
    this.usuarioService.addUsuario(this.usuarioForm.value as any);
  }

  cambiarTipo(value: any): void {
    console.log(value)
    this.tipoFormulario = value.target.value;
  }


}

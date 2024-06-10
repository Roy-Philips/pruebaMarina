import { Injectable } from '@angular/core';
import { IUsuario } from './usuario-detalle/usuario-detalle.component';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  users =[
    {
      nifPass: "545464654R",
      nombre: "Pepe",
      apellido1: "Garcia",
      apellido2: "Lopez",
      genero: "male",
      fechaNacimiento: "01/02/1999",
      calle: "Rosalia",
      numero: 2,
      puerta: 3,
      codigoPostal: 44444,
      ciudad: "Barcelona",
      estudios: [
        {
          nombreInstitucion: "UCLA",
          titulacion: "doctor",
          fecha: "16/05/2024"

        }
      ]
    },
    {
      nifPass: "545464654R",
      nombre: "Antonio",
      apellido1: "Garcia",
      apellido2: "Lopez",
      genero: "male",
      fechaNacimiento: "01/02/1999",
      calle: "Rosalia",
      numero: 2,
      puerta: 3,
      codigoPostal: 44444,
      ciudad: "Barcelona",
      estudios: [
        {
          nombreInstitucion: "UCLA",
          titulacion: "doctor",
          fecha: "16/05/2024"

        }
      ]
    },
    {
      nifPass: "545464654R",
      nombre: "Pablo",
      apellido1: "Garcia",
      apellido2: "Lopez",
      genero: "male",
      fechaNacimiento: "01/02/1999",
      calle: "Rosalia",
      numero: 2,
      puerta: 3,
      codigoPostal: 44444,
      ciudad: "Barcelona",
      experienciaLaboral: [
        {
          nombreEmpresa: "UCLA",
          puestoTrabajo: "doctor",
          fecha: "16/05/2024"

        }
      ]
    }
  ];


  constructor() { }

  addUsuario(usuario: IUsuario): any {
    this.users.push(usuario as any)
  }

  deleteUsuario(): void {

  }

  editUsuario(): void { 

  }

  getLista(): any[] {
    return this.users;
  }
}

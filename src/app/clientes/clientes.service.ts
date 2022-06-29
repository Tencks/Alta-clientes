import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './clientes.module';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private Clientes: Cliente[];
  private grupos: Grupo[];

  constructor() {

    this.grupos = [
      {
      id: 0,
      nombre: 'Sin definir'
      },
      {
        id: 1,
        nombre: 'Activos'
      },
      {
        id: 2,
        nombre: 'Inactivos'
      },
      {
        id: 3,
        nombre: 'Deudores'
      },
    ];
   }

   getGrupos () {
    return this.grupos;
   }
   getClientes () {
    return this.Clientes;
   }
   agregarCliente (Cliente: Cliente) {
    this.Clientes.push(Cliente);
   }
   nuevoCliente (): Cliente{
    return{
      id:  this.Clientes.length,
      nombre: '',
      cif: '',
      direccion: '',
      grupo:  0
    };
   }
}

import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import {Cliente, Grupo} from './../cliente.model';


@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

    Cliente: Cliente;
    Grupos: Grupo[];

  constructor( private clientesService: ClientesService) { }

  ngOnInit() {

    this.Cliente=
    this.clientesService.nuevoCliente();
    this.Grupos=
    this.clientesService.getGrupos();
  }

  nuevoCliente(): void {
    this.clientesService.agregarCliente(this.Cliente);
      this.Cliente=
      this.clientesService.nuevoCliente();
  }
}

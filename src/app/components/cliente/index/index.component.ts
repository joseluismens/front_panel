import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexClienteComponent {

  filter: string = '';
  clientes: any;
  clientes_const: any;

  constructor(private clienteService: ClienteService) {

    this.clienteService.obtenerClientes().subscribe((data: any) => {
      console.log(data);

      this.clientes = data;
      this.clientes_const = data;

    })

  }

  search() {
    var term = new RegExp(this.filter, 'i');
    this.clientes = this.clientes_const;
    this.clientes = this.clientes.filter((item: any) => term.test(item.nombres) ||
      term.test(item.apellidos) ||
      term.test(item.email) ||
      term.test(item.telefono)


    )
  }

}

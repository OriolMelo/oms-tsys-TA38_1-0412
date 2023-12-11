import { Component, Input } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  @Input() clientes: Cliente[] | any;

}

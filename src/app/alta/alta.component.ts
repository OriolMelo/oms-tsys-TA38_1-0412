import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-alta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {

  nombre: string = "";
  cif: string = "";
  direccion: string = "";
  grupo: string = "";
  cliente: Cliente | null = null;

  @Output() alta_cliente = new EventEmitter();

  constructor(){
    this.grupo="Sin definir";
  }

  guardar(): void{
    if(this.inputsRealizados()){
      this.cliente = new Cliente(this.nombre, this.cif, this.direccion, this.grupo);
      this.alta_cliente.emit(this.cliente);
      this.nombre = this.cif = this.direccion = "";
      this.grupo = "Sin definir";
    }
  }

  inputsRealizados(): boolean{
    return this.nombre!="" && this.cif!="" && this.direccion!="";
  }
}

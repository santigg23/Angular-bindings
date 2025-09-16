import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.html',
  styleUrls: ['./padre.scss'],
  standalone: false
})
export class Padre {
  tarea: string = '';
  mensaje: string = '';

  // Método para enviar al hijo
  enviarTarea() {
    this.mensaje = `Tarea pendiente: ${this.tarea}`;
  }

  // Método que recibe del hijo cuando se completa
  marcarCompletada() {
    this.mensaje = `Tarea completada: ${this.tarea}`;
  }
}

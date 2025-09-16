import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.html',
  styleUrls: ['./hijo.scss'],
  standalone: false
})
export class Hijo {
  @Input() tarea: string = '';          
  @Output() completada = new EventEmitter<void>(); 

  marcarCompletada() {
    this.completada.emit(); 
  }
}

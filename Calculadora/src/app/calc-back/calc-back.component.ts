import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalcFrontComponent } from '../calc-front/calc-front.component';

@Component({
  selector: 'app-calc-back',
  standalone: true,
  imports: [CalcFrontComponent],
  templateUrl: './calc-back.component.html',
  styleUrl: './calc-back.component.css'
})
export class CalcBackComponent {
  @Input() valor1back: number = 0;
  @Input() valor2back: number = 0;
  @Output() resultadoBack = new EventEmitter<number>();
  @Output() limpiarInputs = new EventEmitter<void>();

  realizarOperacion(operacion: string) {
    let res = 0;
    switch (operacion) {
      case 'sumar':
        res = this.valor1back + this.valor2back;
        break;
      case 'restar':
        res = this.valor1back - this.valor2back;
        break;
      case 'multiplicar':
        res = this.valor1back * this.valor2back;
        break;
      case 'dividir':
        res = this.valor1back / this.valor2back;
        break;
      case 'potencia':
        res = Math.pow(this.valor1back, this.valor2back);
        break;
      case 'raiz':
        res = Math.sqrt(this.valor1back);
        break;
    }
    this.resultadoBack.emit(res);
  }
  
  limpiar() {
    this.resultadoBack.emit(0);
    this.limpiarInputs.emit();
  }

}

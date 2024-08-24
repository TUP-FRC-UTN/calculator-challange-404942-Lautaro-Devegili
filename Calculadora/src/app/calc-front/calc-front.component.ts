import { Component, ViewEncapsulation } from '@angular/core';
import { CalcBackComponent } from '../calc-back/calc-back.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc-front',
  standalone: true,
  imports: [CalcBackComponent, FormsModule],
  templateUrl: './calc-front.component.html',
  styleUrl: './calc-front.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CalcFrontComponent {
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;

  actualizarResultado(res: number) {
    this.resultado = res;
  }

  limpiarValores() {
    this.valor1 = 0;
    this.valor2 = 0;
  }
}

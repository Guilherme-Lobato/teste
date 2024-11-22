import { Component } from '@angular/core';

@Component({
  selector: 'app-gestao',
  templateUrl: './gestao.component.html',
  styleUrl: './gestao.component.css'
})
export class GestaoComponent {
  loading = false;
  checkbox1 = false;
  checkbox2 = false;

  escolhaCheckbox (selectedCheckbox: string) {
    if (selectedCheckbox == 'checkbox1') {
      this.checkbox2 = false
    } else if (selectedCheckbox == 'checkbox2') {
      this.checkbox1 = false
    }
  }

  clickSalvar () {
    this.loading = true;
  }
}

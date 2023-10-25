import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mensagem = 'Nenhum oi';
  nome: string = 'Maria';

  constructor() {}

  clickOk() {
    if (this.nome) {
      this.mensagem = `Hello world, ${this.nome}!`;
    } else {
      this.mensagem = '';
    }
  }

  changeNome(event: any) {
    console.log(event);
    this.nome = event.target.value.trim();
  }
}

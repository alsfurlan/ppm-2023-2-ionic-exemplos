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

  clickNome() {
    this.mensagem = this.nome
      ? `Hello world, ${this.nome.trim()}!`
      : '';
  }

  limpar() {
    this.nome = '';
    this.mensagem = '';
  }
}

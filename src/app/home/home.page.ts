import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mensagem = 'Nenhum oi';
  nomePadrao: string = 'Maria';

  constructor() {}

  clickOk(nome: HTMLInputElement) {
    console.log(nome);
    if (nome) {
      this.mensagem = `Hello world, ${nome.value.trim()}!`;
    } else {
      this.mensagem = '';
    }
  }

  clickNome(nome: string) {
    console.log(nome);
    if (nome) {
      this.mensagem = `Hello world, ${nome.trim()}!`;
    } else {
      this.mensagem = '';
    }
  }

  limpar(){
    this.nomePadrao = '';
  }
}

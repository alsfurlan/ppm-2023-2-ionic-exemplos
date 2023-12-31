import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent {
  mensagem = '';
  nome: string = '';

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

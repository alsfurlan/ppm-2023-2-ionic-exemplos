import { Component } from "@angular/core";
import { LivroInterface } from "../../types/livro.interface";

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.scss']
})
export class LivroListaComponent {
  livros: LivroInterface[] = [
    {
      titulo: 'JavaScript: O guia definitivo',
      autor: 'David Flanagan',
      cor: 'primary',
    },
    {
      titulo: 'O melhor do JavaScript',
      autor: 'Douglas Cockford',
      cor: 'secondary',
    },
    {
      titulo: 'JavaScript Design Patterns',
      autor: 'Addy Osmani',
      cor: 'danger'
    },
  ]
}

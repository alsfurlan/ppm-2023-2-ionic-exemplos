import { Component } from "@angular/core";

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.scss']
})
export class LivroListaComponent {
  livros: any[] = [
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

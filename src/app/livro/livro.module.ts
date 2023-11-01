import { NgModule } from '@angular/core';
import { LivroListaComponent } from './components/livro-lista/livro-lista.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [LivroListaComponent],
  exports: [LivroListaComponent],
})
export class LivroModule {}

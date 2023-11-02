import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { LivroListaComponent } from '../livro/components/livro-lista/livro-lista.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

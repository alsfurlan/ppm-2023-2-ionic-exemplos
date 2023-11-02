import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LivroListaComponent } from './livro/components/livro-lista/livro-lista.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'hello-world',
    component: HelloWorldComponent,
  },
  {
    path: 'livros',
    component: LivroListaComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

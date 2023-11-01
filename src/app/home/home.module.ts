import { NgModule } from '@angular/core';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HelloWorldModule } from '../hello-world/hello-world.module';
import { IonicModule } from '@ionic/angular';
import { LivroModule } from '../livro/livro.module';

@NgModule({
  imports: [
    IonicModule,
    HomePageRoutingModule,
    HelloWorldModule,
    LivroModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}

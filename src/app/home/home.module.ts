import { NgModule } from '@angular/core';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HelloWorldModule } from '../hello-world/hello-world.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    IonicModule,
    HomePageRoutingModule,
    HelloWorldModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}

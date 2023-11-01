import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [IonicModule, FormsModule, CommonModule],
  exports: [HelloWorldComponent],
})
export class HelloWorldModule {}

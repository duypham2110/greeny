import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProducerPageRoutingModule } from './producer-routing.module';

import { ProducerPage } from './producer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProducerPageRoutingModule
  ],
  declarations: [ProducerPage]
})
export class ProducerPageModule {}

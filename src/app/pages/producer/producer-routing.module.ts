import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProducerPage } from './producer.page';

const routes: Routes = [
  {
    path: '',
    component: ProducerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProducerPageRoutingModule {}

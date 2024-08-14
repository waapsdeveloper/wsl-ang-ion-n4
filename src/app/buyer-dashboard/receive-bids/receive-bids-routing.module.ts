import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceiveBidsPage } from './receive-bids.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiveBidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceiveBidsPageRoutingModule {}

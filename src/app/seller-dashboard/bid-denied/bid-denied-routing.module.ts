import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BidDeniedPage } from './bid-denied.page';

const routes: Routes = [
  {
    path: '',
    component: BidDeniedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BidDeniedPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BidOffersPage } from './bid-offers.page';

const routes: Routes = [
  {
    path: '',
    component: BidOffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BidOffersPageRoutingModule {}

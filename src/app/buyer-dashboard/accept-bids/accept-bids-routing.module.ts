import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptBidsPage } from './accept-bids.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptBidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptBidsPageRoutingModule {}

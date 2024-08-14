import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveBidsPage } from './active-bids.page';

const routes: Routes = [
  {
    path: '',
    component: ActiveBidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveBidsPageRoutingModule {}

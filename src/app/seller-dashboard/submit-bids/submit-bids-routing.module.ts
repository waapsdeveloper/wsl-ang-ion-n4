import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitBidsPage } from './submit-bids.page';

const routes: Routes = [
  {
    path: '',
    component: SubmitBidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmitBidsPageRoutingModule {}

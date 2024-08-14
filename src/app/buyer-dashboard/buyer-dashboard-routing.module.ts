import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyerDashboardPage } from './buyer-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: BuyerDashboardPage,
    children: [
      {
        path: '',
        redirectTo: 'my-jobs',
        pathMatch: 'full'
      },
      {
        path: 'my-jobs',
        loadChildren: () => import('./my-jobs/my-jobs.module').then( m => m.MyJobsPageModule)
      },
      {
        path: 'create-job',
        loadChildren: () => import('./create-job/create-job.module').then( m => m.CreateJobPageModule)
      },
      {
        path: 'receive-bids',
        loadChildren: () => import('./receive-bids/receive-bids.module').then( m => m.ReceiveBidsPageModule)
      },
      {
        path: 'accept-bids',
        loadChildren: () => import('./accept-bids/accept-bids.module').then( m => m.AcceptBidsPageModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyerDashboardPageRoutingModule {}

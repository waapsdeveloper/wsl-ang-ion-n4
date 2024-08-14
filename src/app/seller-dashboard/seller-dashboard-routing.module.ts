import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerDashboardPage } from './seller-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: SellerDashboardPage,
    children: [
      {
        path: '',
        redirectTo: 'find-jobs',
        pathMatch: 'full'
      },
      {
        path: 'find-jobs',
        loadChildren: () => import('./find-jobs/find-jobs.module').then( m => m.FindJobsPageModule)
      },
      {
        path: 'active-bids',
        loadChildren: () => import('./active-bids/active-bids.module').then( m => m.ActiveBidsPageModule)
      },
      {
        path: 'submit-bids',
        loadChildren: () => import('./submit-bids/submit-bids.module').then( m => m.SubmitBidsPageModule)
      },
      {
        path: 'bid-offers',
        loadChildren: () => import('./bid-offers/bid-offers.module').then( m => m.BidOffersPageModule)
      },
      {
        path: 'bid-denied',
        loadChildren: () => import('./bid-denied/bid-denied.module').then( m => m.BidDeniedPageModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerDashboardPageRoutingModule {}

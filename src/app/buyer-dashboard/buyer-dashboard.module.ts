import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyerDashboardPageRoutingModule } from './buyer-dashboard-routing.module';

import { BuyerDashboardPage } from './buyer-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyerDashboardPageRoutingModule
  ],
  declarations: [BuyerDashboardPage]
})
export class BuyerDashboardPageModule {}

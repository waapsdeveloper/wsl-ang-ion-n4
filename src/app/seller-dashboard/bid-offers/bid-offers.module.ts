import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidOffersPageRoutingModule } from './bid-offers-routing.module';

import { BidOffersPage } from './bid-offers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidOffersPageRoutingModule
  ],
  declarations: [BidOffersPage]
})
export class BidOffersPageModule {}

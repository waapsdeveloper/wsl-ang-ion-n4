import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidDeniedPageRoutingModule } from './bid-denied-routing.module';

import { BidDeniedPage } from './bid-denied.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidDeniedPageRoutingModule
  ],
  declarations: [BidDeniedPage]
})
export class BidDeniedPageModule {}

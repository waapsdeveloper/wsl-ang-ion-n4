import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceiveBidsPageRoutingModule } from './receive-bids-routing.module';

import { ReceiveBidsPage } from './receive-bids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceiveBidsPageRoutingModule
  ],
  declarations: [ReceiveBidsPage]
})
export class ReceiveBidsPageModule {}

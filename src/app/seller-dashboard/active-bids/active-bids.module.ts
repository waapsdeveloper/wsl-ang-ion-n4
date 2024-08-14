import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveBidsPageRoutingModule } from './active-bids-routing.module';

import { ActiveBidsPage } from './active-bids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveBidsPageRoutingModule
  ],
  declarations: [ActiveBidsPage]
})
export class ActiveBidsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptBidsPageRoutingModule } from './accept-bids-routing.module';

import { AcceptBidsPage } from './accept-bids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptBidsPageRoutingModule
  ],
  declarations: [AcceptBidsPage]
})
export class AcceptBidsPageModule {}

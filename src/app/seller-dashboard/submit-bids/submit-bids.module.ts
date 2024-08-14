import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmitBidsPageRoutingModule } from './submit-bids-routing.module';

import { SubmitBidsPage } from './submit-bids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmitBidsPageRoutingModule
  ],
  declarations: [SubmitBidsPage]
})
export class SubmitBidsPageModule {}

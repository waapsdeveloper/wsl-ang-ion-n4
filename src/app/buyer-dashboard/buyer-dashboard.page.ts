import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.page.html',
  styleUrls: ['./buyer-dashboard.page.scss'],
})
export class BuyerDashboardPage extends BasePage implements OnInit {

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
  }

}

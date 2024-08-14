import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.page.html',
  styleUrls: ['./seller-dashboard.page.scss'],
})
export class SellerDashboardPage extends BasePage implements OnInit {

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {

  }

}

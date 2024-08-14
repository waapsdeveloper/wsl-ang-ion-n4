import { Component, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends BasePage {

  constructor(injector: Injector) {
    super(injector)
  }

}

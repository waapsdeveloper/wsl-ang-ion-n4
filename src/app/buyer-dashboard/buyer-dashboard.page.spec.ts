import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyerDashboardPage } from './buyer-dashboard.page';

describe('BuyerDashboardPage', () => {
  let component: BuyerDashboardPage;
  let fixture: ComponentFixture<BuyerDashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

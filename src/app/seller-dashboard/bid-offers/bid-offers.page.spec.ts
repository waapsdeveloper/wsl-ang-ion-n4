import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BidOffersPage } from './bid-offers.page';

describe('BidOffersPage', () => {
  let component: BidOffersPage;
  let fixture: ComponentFixture<BidOffersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BidOffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

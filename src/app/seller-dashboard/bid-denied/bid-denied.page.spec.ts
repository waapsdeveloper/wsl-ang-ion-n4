import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BidDeniedPage } from './bid-denied.page';

describe('BidDeniedPage', () => {
  let component: BidDeniedPage;
  let fixture: ComponentFixture<BidDeniedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BidDeniedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

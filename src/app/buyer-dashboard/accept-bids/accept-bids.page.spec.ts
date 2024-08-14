import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcceptBidsPage } from './accept-bids.page';

describe('AcceptBidsPage', () => {
  let component: AcceptBidsPage;
  let fixture: ComponentFixture<AcceptBidsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptBidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

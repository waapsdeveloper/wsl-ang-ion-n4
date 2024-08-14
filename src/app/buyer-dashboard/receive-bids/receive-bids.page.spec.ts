import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceiveBidsPage } from './receive-bids.page';

describe('ReceiveBidsPage', () => {
  let component: ReceiveBidsPage;
  let fixture: ComponentFixture<ReceiveBidsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveBidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

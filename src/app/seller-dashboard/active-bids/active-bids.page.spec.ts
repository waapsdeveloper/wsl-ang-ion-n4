import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActiveBidsPage } from './active-bids.page';

describe('ActiveBidsPage', () => {
  let component: ActiveBidsPage;
  let fixture: ComponentFixture<ActiveBidsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveBidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

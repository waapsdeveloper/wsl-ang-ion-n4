import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubmitBidsPage } from './submit-bids.page';

describe('SubmitBidsPage', () => {
  let component: SubmitBidsPage;
  let fixture: ComponentFixture<SubmitBidsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitBidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

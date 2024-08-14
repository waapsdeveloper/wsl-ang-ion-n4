import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindJobsPage } from './find-jobs.page';

describe('FindJobsPage', () => {
  let component: FindJobsPage;
  let fixture: ComponentFixture<FindJobsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FindJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListingReportComponent } from './user-listing-report.component';

describe('UserListingReportComponent', () => {
  let component: UserListingReportComponent;
  let fixture: ComponentFixture<UserListingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListingReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

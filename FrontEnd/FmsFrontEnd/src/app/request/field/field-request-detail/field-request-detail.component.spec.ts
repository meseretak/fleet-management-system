import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldRequestDetailComponent } from './field-request-detail.component';

describe('FieldRequestDetailComponent', () => {
  let component: FieldRequestDetailComponent;
  let fixture: ComponentFixture<FieldRequestDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldRequestDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

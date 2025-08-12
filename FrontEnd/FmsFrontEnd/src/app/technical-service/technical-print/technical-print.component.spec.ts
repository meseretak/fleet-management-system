import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalPrintComponent } from './technical-print.component';

describe('TechnicalPrintComponent', () => {
  let component: TechnicalPrintComponent;
  let fixture: ComponentFixture<TechnicalPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalPrintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

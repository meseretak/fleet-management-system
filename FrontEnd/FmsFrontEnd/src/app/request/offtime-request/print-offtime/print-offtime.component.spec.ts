import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintOfftimeComponent } from './print-offtime.component';

describe('PrintOfftimeComponent', () => {
  let component: PrintOfftimeComponent;
  let fixture: ComponentFixture<PrintOfftimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintOfftimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintOfftimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

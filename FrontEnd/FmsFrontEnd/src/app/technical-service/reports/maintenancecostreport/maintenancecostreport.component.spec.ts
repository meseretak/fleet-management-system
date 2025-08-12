import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancecostreportComponent } from './maintenancecostreport.component';

describe('MaintenancecostreportComponent', () => {
  let component: MaintenancecostreportComponent;
  let fixture: ComponentFixture<MaintenancecostreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenancecostreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenancecostreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

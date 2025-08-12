import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapApproverComponent } from './map-approver.component';

describe('MapApproverComponent', () => {
  let component: MapApproverComponent;
  let fixture: ComponentFixture<MapApproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapApproverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

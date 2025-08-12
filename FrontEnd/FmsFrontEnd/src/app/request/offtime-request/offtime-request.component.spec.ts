import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfftimeRequestComponent } from './offtime-request.component';

describe('OfftimeRequestComponent', () => {
  let component: OfftimeRequestComponent;
  let fixture: ComponentFixture<OfftimeRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfftimeRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfftimeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

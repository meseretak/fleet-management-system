import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehcilefieldRequestComponent } from './vehcilefield-request.component';

describe('VehcilefieldRequestComponent', () => {
  let component: VehcilefieldRequestComponent;
  let fixture: ComponentFixture<VehcilefieldRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehcilefieldRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehcilefieldRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

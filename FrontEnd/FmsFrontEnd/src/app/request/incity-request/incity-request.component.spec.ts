import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncityRequestComponent } from './incity-request.component';

describe('IncityRequestComponent', () => {
  let component: IncityRequestComponent;
  let fixture: ComponentFixture<IncityRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncityRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncityRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

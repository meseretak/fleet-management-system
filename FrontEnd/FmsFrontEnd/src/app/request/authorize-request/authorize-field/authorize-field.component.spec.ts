import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeFieldComponent } from './authorize-field.component';

describe('AuthorizeFieldComponent', () => {
  let component: AuthorizeFieldComponent;
  let fixture: ComponentFixture<AuthorizeFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizeFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

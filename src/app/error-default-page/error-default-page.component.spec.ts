import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDefaultPageComponent } from './error-default-page.component';

describe('ErrorDefaultPageComponent', () => {
  let component: ErrorDefaultPageComponent;
  let fixture: ComponentFixture<ErrorDefaultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorDefaultPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorDefaultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

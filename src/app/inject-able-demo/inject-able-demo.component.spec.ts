import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectAbleDemoComponent } from './inject-able-demo.component';

describe('InjectAbleDemoComponent', () => {
  let component: InjectAbleDemoComponent;
  let fixture: ComponentFixture<InjectAbleDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectAbleDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectAbleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

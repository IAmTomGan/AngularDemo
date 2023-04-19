import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectableDemoComponent } from './injectable-demo.component';

describe('InjectableDemoComponent', () => {
  let component: InjectableDemoComponent;
  let fixture: ComponentFixture<InjectableDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectableDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

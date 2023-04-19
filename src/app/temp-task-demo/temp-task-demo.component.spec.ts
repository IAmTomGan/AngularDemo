import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempTaskDemoComponent } from './temp-task-demo.component';

describe('TempTaskDemoComponent', () => {
  let component: TempTaskDemoComponent;
  let fixture: ComponentFixture<TempTaskDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempTaskDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempTaskDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

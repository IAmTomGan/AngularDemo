import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollbackDemoComponent } from './rollback-demo.component';

describe('RollbackDemoComponent', () => {
  let component: RollbackDemoComponent;
  let fixture: ComponentFixture<RollbackDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollbackDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollbackDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

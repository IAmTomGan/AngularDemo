import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTransferDemoComponent } from './data-transfer-demo.component';

describe('DataTransferDemoComponent', () => {
  let component: DataTransferDemoComponent;
  let fixture: ComponentFixture<DataTransferDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTransferDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTransferDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

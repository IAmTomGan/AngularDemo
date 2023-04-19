import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTransferSubDemoComponent } from './data-transfer-sub-demo.component';

describe('DataTransferSubDemoComponent', () => {
  let component: DataTransferSubDemoComponent;
  let fixture: ComponentFixture<DataTransferSubDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTransferSubDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTransferSubDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

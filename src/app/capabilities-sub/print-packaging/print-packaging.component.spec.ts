import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPackagingComponent } from './print-packaging.component';

describe('PrintPackagingComponent', () => {
  let component: PrintPackagingComponent;
  let fixture: ComponentFixture<PrintPackagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPackagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

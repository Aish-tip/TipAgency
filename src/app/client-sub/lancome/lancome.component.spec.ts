import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancomeComponent } from './lancome.component';

describe('LancomeComponent', () => {
  let component: LancomeComponent;
  let fixture: ComponentFixture<LancomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

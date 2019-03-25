import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeanrochComponent } from './jeanroch.component';

describe('JeanrochComponent', () => {
  let component: JeanrochComponent;
  let fixture: ComponentFixture<JeanrochComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeanrochComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeanrochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AksharaComponent } from './akshara.component';

describe('AksharaComponent', () => {
  let component: AksharaComponent;
  let fixture: ComponentFixture<AksharaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AksharaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AksharaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

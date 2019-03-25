import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SarayuComponent } from './sarayu.component';

describe('SarayuComponent', () => {
  let component: SarayuComponent;
  let fixture: ComponentFixture<SarayuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarayuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarayuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

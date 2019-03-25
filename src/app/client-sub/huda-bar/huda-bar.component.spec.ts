import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HudaBarComponent } from './huda-bar.component';

describe('HudaBarComponent', () => {
  let component: HudaBarComponent;
  let fixture: ComponentFixture<HudaBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HudaBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HudaBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

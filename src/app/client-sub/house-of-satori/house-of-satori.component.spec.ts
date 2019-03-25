import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseOfSatoriComponent } from './house-of-satori.component';

describe('HouseOfSatoriComponent', () => {
  let component: HouseOfSatoriComponent;
  let fixture: ComponentFixture<HouseOfSatoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseOfSatoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseOfSatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

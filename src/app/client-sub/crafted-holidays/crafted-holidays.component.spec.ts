import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftedHolidaysComponent } from './crafted-holidays.component';

describe('CraftedHolidaysComponent', () => {
  let component: CraftedHolidaysComponent;
  let fixture: ComponentFixture<CraftedHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftedHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftedHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftedTripsComponent } from './crafted-trips.component';

describe('CraftedTripsComponent', () => {
  let component: CraftedTripsComponent;
  let fixture: ComponentFixture<CraftedTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftedTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftedTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

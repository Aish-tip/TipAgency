import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenbeansComponent } from './sevenbeans.component';

describe('SevenbeansComponent', () => {
  let component: SevenbeansComponent;
  let fixture: ComponentFixture<SevenbeansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenbeansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenbeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiasholaComponent } from './thiashola.component';

describe('ThiasholaComponent', () => {
  let component: ThiasholaComponent;
  let fixture: ComponentFixture<ThiasholaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThiasholaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiasholaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

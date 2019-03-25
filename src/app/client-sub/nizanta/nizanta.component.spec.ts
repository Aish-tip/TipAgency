import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NizantaComponent } from './nizanta.component';

describe('NizantaComponent', () => {
  let component: NizantaComponent;
  let fixture: ComponentFixture<NizantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NizantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NizantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

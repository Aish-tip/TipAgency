import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavyasachiComponent } from './savyasachi.component';

describe('SavyasachiComponent', () => {
  let component: SavyasachiComponent;
  let fixture: ComponentFixture<SavyasachiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavyasachiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavyasachiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KandavaraComponent } from './kandavara.component';

describe('KandavaraComponent', () => {
  let component: KandavaraComponent;
  let fixture: ComponentFixture<KandavaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KandavaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KandavaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

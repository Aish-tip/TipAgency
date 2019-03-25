import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KingfisherComponent } from './kingfisher.component';

describe('KingfisherComponent', () => {
  let component: KingfisherComponent;
  let fixture: ComponentFixture<KingfisherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KingfisherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KingfisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

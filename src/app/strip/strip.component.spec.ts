import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripComponent } from './strip.component';

describe('StripComponent', () => {
  let component: StripComponent;
  let fixture: ComponentFixture<StripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

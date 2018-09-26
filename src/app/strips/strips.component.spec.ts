import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripsComponent } from './strips.component';

describe('StripsComponent', () => {
  let component: StripsComponent;
  let fixture: ComponentFixture<StripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

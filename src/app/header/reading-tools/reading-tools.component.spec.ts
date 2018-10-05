import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingToolsComponent } from './reading-tools.component';

describe('ReadingToolsComponent', () => {
  let component: ReadingToolsComponent;
  let fixture: ComponentFixture<ReadingToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

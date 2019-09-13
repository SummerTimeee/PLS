import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanSpaceComponent } from './pan-space.component';

describe('PanSpaceComponent', () => {
  let component: PanSpaceComponent;
  let fixture: ComponentFixture<PanSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

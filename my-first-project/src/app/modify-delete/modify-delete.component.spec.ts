import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDeleteComponent } from './modify-delete.component';

describe('ModifyDeleteComponent', () => {
  let component: ModifyDeleteComponent;
  let fixture: ComponentFixture<ModifyDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

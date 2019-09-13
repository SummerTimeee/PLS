import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionLineSchematicComponent } from './production-line-schematic.component';

describe('ProductionLineSchematicComponent', () => {
  let component: ProductionLineSchematicComponent;
  let fixture: ComponentFixture<ProductionLineSchematicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionLineSchematicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionLineSchematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

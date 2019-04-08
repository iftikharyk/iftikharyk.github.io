import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyForSaleComponent } from './property-for-sale.component';

describe('PropertyForSaleComponent', () => {
  let component: PropertyForSaleComponent;
  let fixture: ComponentFixture<PropertyForSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyForSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

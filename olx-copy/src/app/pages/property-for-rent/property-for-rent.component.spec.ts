import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyForRentComponent } from './property-for-rent.component';

describe('PropertyForRentComponent', () => {
  let component: PropertyForRentComponent;
  let fixture: ComponentFixture<PropertyForRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyForRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyForRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

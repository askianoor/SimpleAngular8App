import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceStatusComponent } from './price-status.component';

describe('PriceStatusComponent', () => {
  let component: PriceStatusComponent;
  let fixture: ComponentFixture<PriceStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

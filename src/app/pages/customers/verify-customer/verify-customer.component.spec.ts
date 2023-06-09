import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyCustomerComponent } from './verify-customer.component';

describe('VerifyCustomerComponent', () => {
  let component: VerifyCustomerComponent;
  let fixture: ComponentFixture<VerifyCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

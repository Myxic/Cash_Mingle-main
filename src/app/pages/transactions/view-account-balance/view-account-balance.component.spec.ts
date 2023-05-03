import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountBalanceComponent } from './view-account-balance.component';

describe('ViewAccountBalanceComponent', () => {
  let component: ViewAccountBalanceComponent;
  let fixture: ComponentFixture<ViewAccountBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAccountBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAccountBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

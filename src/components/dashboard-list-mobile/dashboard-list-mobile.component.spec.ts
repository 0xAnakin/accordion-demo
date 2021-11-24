import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardListMobileComponent } from './dashboard-list-mobile.component';

describe('DashboardListMobileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DashboardListMobileComponent
      ],
    }).compileComponents();
  });

  it('should get created', () => {
    const fixture = TestBed.createComponent(DashboardListMobileComponent);
    const accordion = fixture.componentInstance;
    expect(accordion).toBeTruthy();
  });

});

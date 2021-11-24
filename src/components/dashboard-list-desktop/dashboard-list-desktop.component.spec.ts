import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardListDesktopComponent } from './dashboard-list-desktop.component';

describe('DashboardListDesktopComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DashboardListDesktopComponent
      ],
    }).compileComponents();
  });

  it('should get created', () => {
    const fixture = TestBed.createComponent(DashboardListDesktopComponent);
    const accordion = fixture.componentInstance;
    expect(accordion).toBeTruthy();
  });

});

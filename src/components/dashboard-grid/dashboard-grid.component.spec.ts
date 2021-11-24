import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardGridComponent } from './dashboard-grid.component';

describe('DashboardGridComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DashboardGridComponent
      ],
    }).compileComponents();
  });

  it('should get created', () => {
    const fixture = TestBed.createComponent(DashboardGridComponent);
    const accordion = fixture.componentInstance;
    expect(accordion).toBeTruthy();
  });

});

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardListComponent } from './dashboard-list.component';

describe('DashboardListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DashboardListComponent
      ],
    }).compileComponents();
  });

  it('should get created', () => {
    const fixture = TestBed.createComponent(DashboardListComponent);
    const accordion = fixture.componentInstance;
    expect(accordion).toBeTruthy();
  });

});

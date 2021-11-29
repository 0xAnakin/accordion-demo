import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SectionTableComponent } from './section-table.component';

describe('SectionTableComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SectionTableComponent
      ],
    }).compileComponents();
  });

  it('should get created', () => {
    const fixture = TestBed.createComponent(SectionTableComponent);
    const accordion = fixture.componentInstance;
    expect(accordion).toBeTruthy();
  });

});

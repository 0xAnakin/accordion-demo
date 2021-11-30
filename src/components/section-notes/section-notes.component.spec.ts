import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SectionNotesComponent } from './section-notes.component';

describe('SectionNotesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SectionNotesComponent
      ],
    }).compileComponents();
  });

  it('should get created', () => {
    const fixture = TestBed.createComponent(SectionNotesComponent);
    const accordion = fixture.componentInstance;
    expect(accordion).toBeTruthy();
  });

});

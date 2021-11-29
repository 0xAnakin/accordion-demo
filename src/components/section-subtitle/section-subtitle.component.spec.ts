import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SectionSubtitleComponent } from './section-subtitle.component';

describe('SectionSubtitleComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SectionSubtitleComponent
      ],
    }).compileComponents();
  });

  it('should get created', () => {
    const fixture = TestBed.createComponent(SectionSubtitleComponent);
    const accordion = fixture.componentInstance;
    expect(accordion).toBeTruthy();
  });

});

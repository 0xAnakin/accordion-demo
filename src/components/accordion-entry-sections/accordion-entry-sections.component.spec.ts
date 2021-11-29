import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AccordionEntrySectionsComponent } from './accordion-entry-sections.component';

describe('AccordionEntrySectionsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AccordionEntrySectionsComponent
      ],
    }).compileComponents();
  });

  it('should get created', () => {
    const fixture = TestBed.createComponent(AccordionEntrySectionsComponent);
    const accordion = fixture.componentInstance;
    expect(accordion).toBeTruthy();
  });

});

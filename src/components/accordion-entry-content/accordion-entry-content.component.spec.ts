import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AccordionEntryContentComponent } from './accordion-entry-content.component';

describe('AccordionEntryContentComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AccordionEntryContentComponent
      ],
    }).compileComponents();
  });

  it('should get created', () => {
    const fixture = TestBed.createComponent(AccordionEntryContentComponent);
    const accordion = fixture.componentInstance;
    expect(accordion).toBeTruthy();
  });

});

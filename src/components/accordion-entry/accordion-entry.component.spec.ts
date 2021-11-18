import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AccordionEntryComponent } from './accordion-entry.component';

describe('AccordionEntryComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AccordionEntryComponent
      ],
    }).compileComponents();
  });

  it('should get created', () => {
    const fixture = TestBed.createComponent(AccordionEntryComponent);
    const accordion = fixture.componentInstance;
    expect(accordion).toBeTruthy();
  });

});

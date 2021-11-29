import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SectionFieldsComponent } from './section-fields.component';

describe('SectionFieldsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SectionFieldsComponent
      ],
    }).compileComponents();
  });

  it('should get created', () => {
    const fixture = TestBed.createComponent(SectionFieldsComponent);
    const accordion = fixture.componentInstance;
    expect(accordion).toBeTruthy();
  });

});

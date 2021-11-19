import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NotFoundComponent
      ],
    }).compileComponents();
  });

  it('should get created', () => {
    const fixture = TestBed.createComponent(NotFoundComponent);
    const accordion = fixture.componentInstance;
    expect(accordion).toBeTruthy();
  });

});

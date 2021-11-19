import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FireComponent } from './fire.component';

describe('FireComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FireComponent
      ],
    }).compileComponents();
  });

  it('should get created', () => {
    const fixture = TestBed.createComponent(FireComponent);
    const accordion = fixture.componentInstance;
    expect(accordion).toBeTruthy();
  });

});

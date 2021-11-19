import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LifeComponent } from './life.component';

describe('LifeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LifeComponent
      ],
    }).compileComponents();
  });

  it('should get created', () => {
    const fixture = TestBed.createComponent(LifeComponent);
    const accordion = fixture.componentInstance;
    expect(accordion).toBeTruthy();
  });

});

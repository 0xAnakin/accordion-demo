import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LifePolicyComponent } from './life.component';

describe('LifePolicyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LifePolicyComponent
      ],
    }).compileComponents();
  });

  it('should get created', () => {
    const fixture = TestBed.createComponent(LifePolicyComponent);
    const accordion = fixture.componentInstance;
    expect(accordion).toBeTruthy();
  });

});

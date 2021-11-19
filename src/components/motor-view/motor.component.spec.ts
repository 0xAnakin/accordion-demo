import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MotorComponent } from './motor.component';

describe('MotorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MotorComponent
      ],
    }).compileComponents();
  });

  it('should get created', () => {
    const fixture = TestBed.createComponent(MotorComponent);
    const accordion = fixture.componentInstance;
    expect(accordion).toBeTruthy();
  });

});

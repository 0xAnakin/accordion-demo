import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MotorPolicyComponent } from './motor.component';

describe('MotorPolicyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MotorPolicyComponent
      ],
    }).compileComponents();
  });

  it('should get created', () => {
    const fixture = TestBed.createComponent(MotorPolicyComponent);
    const accordion = fixture.componentInstance;
    expect(accordion).toBeTruthy();
  });

});

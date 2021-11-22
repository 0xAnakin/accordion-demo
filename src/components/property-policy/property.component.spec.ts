import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PropertyPolicyComponent } from './property.component';

describe('PropertyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PropertyPolicyComponent
      ],
    }).compileComponents();
  });

  it('should get created', () => {
    const fixture = TestBed.createComponent(PropertyPolicyComponent);
    const accordion = fixture.componentInstance;
    expect(accordion).toBeTruthy();
  });

});

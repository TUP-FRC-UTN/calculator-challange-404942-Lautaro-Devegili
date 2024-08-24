import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcFrontComponent } from './calc-front.component';

describe('CalcFrontComponent', () => {
  let component: CalcFrontComponent;
  let fixture: ComponentFixture<CalcFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcFrontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

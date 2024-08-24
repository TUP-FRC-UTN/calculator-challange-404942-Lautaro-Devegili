import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcBackComponent } from './calc-back.component';

describe('CalcBackComponent', () => {
  let component: CalcBackComponent;
  let fixture: ComponentFixture<CalcBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowRentWorksCardComponent } from './how-rent-works-card.component';

describe('HowRentWorksCardComponent', () => {
  let component: HowRentWorksCardComponent;
  let fixture: ComponentFixture<HowRentWorksCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowRentWorksCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowRentWorksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

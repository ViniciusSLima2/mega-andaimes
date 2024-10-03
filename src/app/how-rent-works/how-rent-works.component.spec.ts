import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowRentWorksComponent } from './how-rent-works.component';

describe('HowRentWorksComponent', () => {
  let component: HowRentWorksComponent;
  let fixture: ComponentFixture<HowRentWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowRentWorksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowRentWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

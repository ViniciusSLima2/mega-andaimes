import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesSectionComponent } from './accessories-section.component';

describe('AccessoriesSectionComponent', () => {
  let component: AccessoriesSectionComponent;
  let fixture: ComponentFixture<AccessoriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

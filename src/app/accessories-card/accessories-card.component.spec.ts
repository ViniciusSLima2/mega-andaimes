import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesCardComponent } from './accessories-card.component';

describe('AccessoriesCardComponent', () => {
  let component: AccessoriesCardComponent;
  let fixture: ComponentFixture<AccessoriesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

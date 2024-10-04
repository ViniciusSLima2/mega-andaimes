import { Component } from '@angular/core';
import { AccessoriesCardComponent } from '../accessories-card/accessories-card.component';
@Component({
  selector: 'app-accessories-section',
  standalone: true,
  imports: [AccessoriesCardComponent],
  templateUrl: './accessories-section.component.html',
  styleUrl: './accessories-section.component.css'
})
export class AccessoriesSectionComponent {

}

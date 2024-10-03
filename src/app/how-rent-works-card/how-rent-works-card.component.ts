import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-how-rent-works-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './how-rent-works-card.component.html',
  styleUrl: './how-rent-works-card.component.css'
})
export class HowRentWorksCardComponent {
  @Input() imgSrc?: string;
  @Input() imgAlt?: string;
  @Input() title?: string;
  @Input() description?: string;
}

import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-accessories-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './accessories-card.component.html',
  styleUrl: './accessories-card.component.css'
})
export class AccessoriesCardComponent {
  @Input({required: true}) imgAlt: string = "";
  @Input({required: true}) imgSrc: string = "";
  @Input({required: true}) itemName: string = "";
}

import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-image-description-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './image-description-card.component.html',
  styleUrl: './image-description-card.component.css'
})
export class ImageDescriptionCardComponent {

  @Input({required: true}) imgSrc = "";
  @Input({required: true}) imgAlt = "";
  @Input({required: true}) title = "";
  @Input({required: true}) description = "";
  @Input() imgWidth = "30";
  @Input() imgHeight = "30";
}

import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-text-image-card',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './text-image-card.component.html',
  styleUrl: './text-image-card.component.css'
})
export class TextImageCardComponent {
  @Input({required: true}) itemName: string = "";
  @Input({required: true}) itemImg: string = "";
  @Input({required: true}) itemDescription: string = "";
  @Input({required: true}) itemImgAlt: string = "";
  @Input({required: true}) advantageTitle: string = "";
  @Input() inverted: boolean = false;
  @Input({required: true}) advantagesItems: {title : string, description : string}[] = [];
}

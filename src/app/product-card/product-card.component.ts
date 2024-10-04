import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input({required: true}) itemName: string = "";
  @Input({required: true}) itemImg: string = "";
  @Input({required: true}) itemImgAlt: string = "";
}

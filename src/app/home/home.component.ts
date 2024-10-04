import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HomeBannerComponent } from '../home-banner/home-banner.component';
import { TextImageSectionComponent } from '../text-image-section/text-image-section.component';
import { AccessoriesSectionComponent } from '../accessories-section/accessories-section.component';
import { ItemListComponent } from '../item-list/item-list.component';
import { ImageDescriptionCardComponent } from '../image-description-card/image-description-card.component';
import { ProductListComponent } from '../product-list/product-list.component';
@Component({
  selector: 'home',
  standalone: true,
  imports: [ProductListComponent, ImageDescriptionCardComponent, ItemListComponent, CommonModule, HeaderComponent,  HomeBannerComponent, TextImageSectionComponent, AccessoriesSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

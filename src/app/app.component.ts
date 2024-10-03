import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HowRentWorksComponent } from './how-rent-works/how-rent-works.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeBannerComponent, HowRentWorksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mega-andaimes';
}

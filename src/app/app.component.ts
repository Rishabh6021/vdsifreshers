import { NavigationLinks } from './navigation-links';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travelService';
  subHeading = 'Chennai';

  // links: string[] = ['home', 'catalog', 'payment', 'contact'];

  links: NavigationLinks[] = [
  {text: 'Home', link: '/search'},
  {text: 'Catalog', link: '/show'}
  ];
}

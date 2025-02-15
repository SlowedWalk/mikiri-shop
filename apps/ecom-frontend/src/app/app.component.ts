import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { FaConfig, FaIconComponent, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NgOptimizedImage,
    FaIconComponent,
    NavbarComponent,
    FooterComponent
  ],
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ecom-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ecom-frontend';

  private faIconLibrary = inject(FaIconLibrary)
  private faConfig = inject(FaConfig)

  ngOnInit(): void {
    this.initFontAwesome()
  }

  initFontAwesome() {
    this.faConfig.defaultPrefix = 'far';
    this.faIconLibrary.addIcons(...fontAwesomeIcons)
  }
}

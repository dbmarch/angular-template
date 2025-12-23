import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  readonly iconRegistey = inject(MatIconRegistry);
  readonly domSanitizer = inject(DomSanitizer);

  registerIcons() {
    this.iconRegistey.registerFontClassAlias('symbol', 'material-symbols-outlined');
    this.iconRegistey.registerFontClassAlias('icon', 'material-icons');
    this.iconRegistey.setDefaultFontSetClass('material-symbols-outlined');

    this.iconRegistey.addSvgIcon('trophy', this.domSanitizer.bypassSecurityTrustResourceUrl('svg/cup-star.svg'));
    this.iconRegistey.addSvgIcon('hearts', this.domSanitizer.bypassSecurityTrustResourceUrl('svg/heart-halfs.svg'));
  }

}
import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ThemeService } from '../../services/theme.service';  
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(private themeService: ThemeService) {}

  onClick(scheme: string) {
    console.log('Button clicked with scheme:', scheme);
    this.themeService.setScheme(scheme);
  }

}

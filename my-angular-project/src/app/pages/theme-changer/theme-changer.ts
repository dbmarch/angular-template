import { Component, effect, inject, model } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {ThemeService} from '../../services/theme.service'

@Component({
  selector: 'app-theme-changer',
  imports: [
    MatSelectModule,
  ],
  templateUrl: './theme-changer.html',
  styleUrl: './theme-changer.scss',
})
export class ThemeChanger {
  themeService = inject(ThemeService);
  colors = this.themeService.possibleColors;
  selected = model<string>('');

  constructor(){
    effect(()=>{
      console.log ("Selected", this.selected());
      this.themeService.setColor(this.selected());
    })
  }
}

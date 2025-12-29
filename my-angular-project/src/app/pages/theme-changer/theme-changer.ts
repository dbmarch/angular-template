import { Component, effect, inject, model } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {ThemeService} from '../../services/theme.service'
import { ThemeColors } from '../../models/theme.model';

@Component({
  selector: 'app-theme-changer',
  imports: [
    MatSelectModule,
  ],
  templateUrl: './theme-changer.html',
  styleUrl: './theme-changer.scss',
})
export class ThemeChanger {
  private themeService = inject(ThemeService);
  colors = this.themeService.possibleColors;
  private initialColor: ThemeColors = this.themeService.currentTheme.color ?? this.colors[0];
  selected = model<string>(this.initialColor.value);

  constructor(){
    // console.log ('initial color ', this.initialColor, this.selected())
    effect(()=>{
      if (this.selected()) {
        console.log ("Selected", this.selected());
        this.themeService.setColor(this.selected());
      }
    })
  }
}

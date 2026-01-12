import { Component, inject, effect, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FruitService } from '../../services/fruit.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
}
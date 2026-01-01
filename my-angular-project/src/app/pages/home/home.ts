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
private fruitService = inject(FruitService);

fruits = this.fruitService.fruitResource;

fruit = this.fruitService.fruitResource2;

selectedFruit = signal<number>(0);

onSubmit() {
  console.log('onSubmit', this.selectedFruit())
  this.fruitService.selectFruit(this.selectedFruit())
}

constructor (){
  console.log ('constructor');
  effect(() => {
    console.log ('Home fruits', this.fruits.value())
  });

  effect(() => {
    console.log ('SelectedFruit', this.selectedFruit())
  });
}
}

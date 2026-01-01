

import { DestroyRef, Injectable, computed, effect, inject, signal } from "@angular/core";
import { HttpClient, httpResource } from '@angular/common/http';
import { throwError, map, catchError, Subscription } from "rxjs";
import { Token } from '../models/token.model'

export interface Fruit {
   name:   string,
   color:  string,
}

export interface SelectedFruit {
   id: number,
   // selectedFruit?: number;
   data: Fruit;
}

@Injectable({providedIn: 'root'})
export class FruitService {
    private destroyRef = inject (DestroyRef);
    private baseUrl='http://localhost:3000/api/fruit';

selectFruit(id: number): void {
   console.log ("FruitService: selecting fruit", id)
   this.fruitId.set(id);
}

fruitResource = httpResource<Fruit[]> (
   () => `${this.baseUrl}`, {
   defaultValue: [],
});

fruits = computed(() => this.fruitResource.value());

fruitId = signal<number>(1);


//Data comes back like this:
// {
//   "selectedFruit": "1",
//   "data": {
//     "name": "apple",
//     "color": "red"
//   }
// }

fruitResource2 = httpResource<SelectedFruit> (
   () => {
      const id = this.fruitId();
      console.log ("fruitResource2 fruitId", this.fruitId());
      return { url: `${this.baseUrl}/${id}`};
   }, {
   defaultValue: {id : 0, data: {name: '', color: ''}},
   parse: (val: unknown) => {
      console.log('val', val);
      const newFruit  = val as SelectedFruit;   // this is what fixes the return value.
      console.log ('newfruit', newFruit)
      console.log ('newFruit.id', newFruit.id, typeof(newFruit.id))
      console.log ('parse newFruit', newFruit);
      return newFruit;
   }
});

constructor() {

   effect(() => {
      console.log ('fruitService fruits', this.fruitResource.value());
      console.log ('fruitService fruit', this.fruitResource2.value());
   })
}
// fruitResource = httpResource<Fruit[]> (() => (
//    () => (`${baseUrl}`), {
//    parse: ((data: unknown) => {
//       console.log ('parse ', data)
//       return data;
//    })
//    }));


}
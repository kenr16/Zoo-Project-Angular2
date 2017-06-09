import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>My First Angular 2 App</h1>

  <animal-list [childAnimalList]="masterAnimalList"></animal-list>
  <new-animal></new-animal>



  `
})


export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterAnimalList: Animal[] = [
    new Animal('Lion', 'Simba', 5, 'Carnivore', 'Africa', 2, 'Male', 'Eating a meal', 'Loud Noises', 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg', 'https://s-media-cache-ak0.pinimg.com/736x/56/84/7f/56847f89d1065e69cce987cd04b0dfad.jpg', 'Today'),
    new Animal('Tiger', 'Lolo', 6, 'Carnivore', 'Asia', 4, 'Female', 'Chasing Balls', 'Sunlight', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg/1200px-Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg', 'http://www.wildaid.org/sites/default/files/photos/iStock_000008484745Large%20%20tiger%20-%20bengal.jpg', 'Today'),
    new Animal('Bear', 'Tim', 2, 'Carnivore', 'Europe', 3, 'Male', 'Scratching its back', 'Bees', 'https://upload.wikimedia.org/wikipedia/commons/7/71/2010-kodiak-bear-1.jpg', 'http://img.huffingtonpost.com/asset/scalefit_950_800_noupscale/562e81f4140000e800c7adb5.jpeg', 'Today')
  ];



}

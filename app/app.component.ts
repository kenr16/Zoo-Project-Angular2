import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Animal Zoo</h1>

  <animal-list [childAnimalList]="masterAnimalList" (editSender)="editAnimal($event)"></animal-list>
  <button (click)="createNewAnimal()">New Animal</button>
  <new-animal [newAnimal]="newAnimal"></new-animal>
  <edit-animal [animalToEdit]="animalToEdit"></edit-animal>

  `
})


export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  newAnimal: Animal = null;
  animalToEdit: Animal = null;

  masterAnimalList: Animal[] = [
    new Animal('Lion', 'Simba', 5, 'Carnivore', 'Africa', 2, 'Male', 'Eating a meal', 'Loud Noises', 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg', 'https://s-media-cache-ak0.pinimg.com/736x/56/84/7f/56847f89d1065e69cce987cd04b0dfad.jpg', 'Today'),
    new Animal('Tiger', 'Lolo', 6, 'Carnivore', 'Asia', 4, 'Female', 'Chasing Balls', 'Sunlight', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg/1200px-Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg', 'http://www.wildaid.org/sites/default/files/photos/iStock_000008484745Large%20%20tiger%20-%20bengal.jpg', 'Today'),
    new Animal('Bear', 'Tim', 2, 'Carnivore', 'Europe', 3, 'Male', 'Scratching its back', 'Bees', 'https://upload.wikimedia.org/wikipedia/commons/7/71/2010-kodiak-bear-1.jpg', 'http://img.huffingtonpost.com/asset/scalefit_950_800_noupscale/562e81f4140000e800c7adb5.jpeg', 'Today')
  ];

  createNewAnimal() {
    this.newAnimal = new Animal('', '', 0, '', '', 0, '', '', '', 'http://1.bp.blogspot.com/-8mf73EG12r0/T795rlQvyaI/AAAAAAAAAxM/lPDqRoghhkg/s1600/animal+cartoon+10.gif', 'https://s-media-cache-ak0.pinimg.com/736x/59/27/ba/5927ba593780679eff94c5663c5c3e8a.jpg', 'Today');
    this.masterAnimalList.push(this.newAnimal);
  }

  editAnimal(recievedAnimal) {
    this.animalToEdit = recievedAnimal;
    console.log(this.animalToEdit);
  }

}

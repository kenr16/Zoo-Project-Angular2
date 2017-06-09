import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Animal Zoo</h1>

  <animal-list [childAnimalList]="masterAnimalList" (editSender2)="editAnimal($event)"></animal-list>
  <button (click)="createNewAnimal()">New Animal</button>
  <new-animal [newAnimal]="newAnimal"></new-animal>
  <edit-animal [animalToEdit]="animalToEdit" (editFinishedSender)="editDone()"></edit-animal>
  {{year}}{{month}}{{day}} caretakers:{{caretakersNeeded}} date: {{date}}
  `
})


export class AppComponent {
  currentTime = new Date();
  month: string = (this.currentTime.getMonth() + 1).toString();
  day: string = (this.currentTime.getDate()).toString();
  year: string = (this.currentTime.getFullYear()).toString();
  newAnimal: Animal = null;
  animalToEdit: Animal = null;
  caretakersNeeded: number = 25;

  masterAnimalList: Animal[] = [
    new Animal('Lion', 'Simba', 5, 'Carnivore', 'Africa', 2, 'Male', 'Eating a meal', 'Loud Noises', 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg', 'https://s-media-cache-ak0.pinimg.com/736x/56/84/7f/56847f89d1065e69cce987cd04b0dfad.jpg', this.currentTime.toDateString()),
    new Animal('Tiger', 'Lolo', 6, 'Carnivore', 'Asia', 4, 'Female', 'Chasing Balls', 'Sunlight', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg/1200px-Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg', 'http://www.wildaid.org/sites/default/files/photos/iStock_000008484745Large%20%20tiger%20-%20bengal.jpg', this.currentTime.toDateString()),
    new Animal('Bear', 'Tim', 2, 'Carnivore', 'Europe', 3, 'Male', 'Scratching its back', 'Bees', 'https://upload.wikimedia.org/wikipedia/commons/7/71/2010-kodiak-bear-1.jpg', 'http://img.huffingtonpost.com/asset/scalefit_950_800_noupscale/562e81f4140000e800c7adb5.jpeg', 'Today'),
    new Animal('Wildebeest', 'Willow', 4, 'Herbivore', 'Africa', 1, 'Female', 'Drinking from a watering hole', 'Flies and other swarming insects', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Blue_Wildebeest%2C_Ngorongoro.jpg/1200px-Blue_Wildebeest%2C_Ngorongoro.jpg', 'http://www.nikela.org/wp-content/uploads/2015/02/SA-Spioenkop-wildebeest-4-sq-950x-.jpg', this.currentTime.toDateString()),
    new Animal('Hippopotamus', 'Hippy', 12, 'Omnivore', 'Africa', 10, 'Male', 'Swimming in shallow water', 'Sharing the watering hole with other animals', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Hippopotamus_-_04.jpg/1200px-Hippopotamus_-_04.jpg', 'http://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/3d/tk/p03dtkw2.jpg', this.currentTime.toDateString()),
    new Animal('Elephant', 'Elle', 25, 'Herbivore', 'Africa', 5, 'Female', 'Eating peanuts', 'Loud noises, mice', 'https://upload.wikimedia.org/wikipedia/commons/6/63/African_elephant_warning_raised_trunk.jpg', 'http://i.dailymail.co.uk/i/pix/2016/08/12/16/33AF370700000578-0-image-m-24_1471015298721.jpg', this.currentTime.toDateString()),
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Europe', 5, 'Female', 'Cool shade', 'Loud noises', 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Iceland-1979445.jpg', 'http://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/a/arctic-fox_thumb.JPG', this.currentTime.toDateString()),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Asia', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/ocelot-on-rock.ngsversion.1428080935877.jpg', 'http://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/o/ocelot_thumb.ngsversion.1485204610298.adapt.1900.1.JPG', this.currentTime.toDateString()),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Europe', 2, 'Female', 'Delicate roots and leaves', 'Loud Noises', 'https://upload.wikimedia.org/wikipedia/commons/b/b7/White-tailed_deer.jpg', 'http://gfp.sd.gov/hunting/big-game/images/deer1-01.jpg', this.currentTime.toDateString()),
  ];

  createNewAnimal() {
    this.newAnimal = new Animal('', '', 0, '', '', 0, '', '', '', 'http://1.bp.blogspot.com/-8mf73EG12r0/T795rlQvyaI/AAAAAAAAAxM/lPDqRoghhkg/s1600/animal+cartoon+10.gif', 'https://s-media-cache-ak0.pinimg.com/736x/59/27/ba/5927ba593780679eff94c5663c5c3e8a.jpg', this.currentTime.toDateString());
    this.masterAnimalList.push(this.newAnimal);
    this.caretakersUpdate()
  }

  editAnimal(recievedAnimal) {
    this.animalToEdit = recievedAnimal;
  }

  editDone() {
    this.caretakersUpdate()
  }

  caretakersUpdate() {
    var total = 0;
    this.masterAnimalList.forEach(function(animal) {
      total += animal.caretakers;
    })
    this.caretakersNeeded = total;
  }



}

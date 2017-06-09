import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <ul>
    <div *ngFor="let currentAnimal of childAnimalList" class="centered">
      <p>{{currentAnimal.name}} the {{currentAnimal.species}}</p>
      <img src="{{currentAnimal.logo}}" class="logo"/>
    </div>
  </ul>

  `
})


export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

}

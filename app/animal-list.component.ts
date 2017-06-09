import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <ul>
    <div *ngFor="let currentAnimal of childAnimalList" (click)="selectedAnimal=currentAnimal" class="centered">
      <p>{{currentAnimal.name}} the {{currentAnimal.species}} stored at the {{currentAnimal.location}} exibit.</p>
      <img src="{{currentAnimal.logo}}" class="logo"/>
      <button>Edit Animal</button>

      <animal-detail [selectedAnimal]="selectedAnimal"></animal-detail>

    </div>
  </ul>

  `
})


export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  selectedAnimal: Animal = null;

}

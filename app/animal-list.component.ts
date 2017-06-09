import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <ul>
    <div *ngFor="let currentAnimal of childAnimalList" (click)="selectedAnimal=currentAnimal" class="centered">
      <h2>{{currentAnimal.name}} the {{currentAnimal.species}} stored at the {{currentAnimal.location}} exibit.</h2>
      <img src="{{currentAnimal.logo}}" class="logo"/><br>
      <button (click)="editButtonClicked(currentAnimal)">Edit Animal</button>

      <animal-detail [selectedAnimal]="currentAnimal"></animal-detail>

    </div>
  </ul>

  `
})


export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() editSender = new EventEmitter();
  selectedAnimal: Animal = null;

  editButtonClicked(currentAnimal) {
    this.editSender.emit(currentAnimal);
  }

}

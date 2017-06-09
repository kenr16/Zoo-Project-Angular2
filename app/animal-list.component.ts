import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <ul>
    <div *ngFor="let currentAnimal of childAnimalList" class="centered">
      <div>
        <h2>{{currentAnimal.name}} the {{currentAnimal.species}} stored at the {{currentAnimal.location}} exibit.</h2>
      </div>

      <animal-detail [currentAnimal]="currentAnimal" [showDetails]="showDetails" (editSender1)="editButtonClicked($event)"></animal-detail>
    </div>
  </ul>

  `
})


export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() editSender2 = new EventEmitter();

  editButtonClicked(currentAnimal) {
    this.editSender2.emit(currentAnimal);
  }

}

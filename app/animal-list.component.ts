import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <label>Enter An Age to Filter Animals By</label>
  <input [(ngModel)]='ageGroup' type='number' min='0' max='100'>

  <ul>
    <div *ngFor="let currentAnimal of childAnimalList | agepipe:ageGroup" class="centered">
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
  ageGroup = 12;

  editButtonClicked(currentAnimal) {
    this.editSender2.emit(currentAnimal);
  }

}

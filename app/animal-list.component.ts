import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <label>Filter Animals by Age</label>
  <input [(ngModel)]='ageGroup' type='number' min='0' max='100'>

  <label>Filter Animals by Number of Caretakers</label>
  <input [(ngModel)]='caretakersGroup' type='number' min='0' max='100'>

  <select (change)="onChange($event.target.value)">
    <option value="Carnivore">Carnivores</option>
    <option value="Herbivore">Herbivores</option>
    <option value="Omnivore" selected="selected">Omnivores</option>
  </select>

  <ul>
    <div *ngFor="let currentAnimal of childAnimalList | agepipe:ageGroup:caretakersGroup:dietFilter" class="centered">
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
  ageGroup = 100;
  caretakersGroup = 100;
  dietFilter = 'Omnivore'

  onChange(optionFromMenu) {
    this.dietFilter = optionFromMenu;
  }

  editButtonClicked(currentAnimal) {
    this.editSender2.emit(currentAnimal);
  }

}

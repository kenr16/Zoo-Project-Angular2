import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <ul>
    <div *ngFor="let currentAnimal of childAnimalList" class="centered">
      <div (click)="showDetails=true" (dblclick)="showDetails=false" >
        <h2>{{currentAnimal.name}} the {{currentAnimal.species}} stored at the {{currentAnimal.location}} exibit.</h2>
        <img src="{{currentAnimal.logo}}" class="logo"/><br>
      </div>
      <button (click)="editButtonClicked(currentAnimal)">Edit Animal</button>
      <animal-detail [currentAnimal]="currentAnimal" [showDetails]="showDetails"></animal-detail>
    </div>
  </ul>

  `
})


export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() editSender = new EventEmitter();

  editButtonClicked(currentAnimal) {
    this.editSender.emit(currentAnimal);
  }

}

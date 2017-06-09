import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-detail',
  template: `
    <img src="{{currentAnimal.logo}}" class="logo" (click)="showDetails = !showDetails"/><br>
    <div *ngIf="showDetails">
      <h3>Selected Animal Details:</h3>
      <p>Name: {{currentAnimal.name}}</p>
      <p>Species: {{currentAnimal.species}}</p>
      <p>Gender: {{currentAnimal.sex}}</p>
      <p>Age: {{currentAnimal.age}}</p>
      <p>Diet: {{currentAnimal.diet}}</p>
      <p>Caretakers Required: {{currentAnimal.caretakers}}</p>
      <p>Specific Likes: {{currentAnimal.likes}}</p>
      <p>Specific Dislikes: {{currentAnimal.dislikes}}</p>
      <p>Animal Exibit Currently Housing Selected Animal: {{currentAnimal.location}}</p>
      <button (click)="editButtonClicked(currentAnimal)">Edit Animal</button><br>
      <img src={{currentAnimal.image}} class="largeimage"/>
    </div>


  `
})

export class AnimalDetailComponent {
  // @Output() newTaskSender = new EventEmitter();
  @Input() currentAnimal: Animal;
  @Input() showDetails: boolean;
  @Output() editSender1 = new EventEmitter();

  editButtonClicked(currentAnimal) {
    this.editSender1.emit(currentAnimal);
  }
}

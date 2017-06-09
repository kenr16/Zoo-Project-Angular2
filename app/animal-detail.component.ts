import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-detail',
  template: `
    <div *ngIf="showDetails">
      <h3>Selected Animal Details:</h3><br>
      <p>Name: {{currentAnimal.name}}</p>
      <p>Species: {{currentAnimal.species}}</p>
      <p>Gender: {{currentAnimal.sex}}</p>
      <p>Age: {{currentAnimal.age}}</p>
      <p>Diet: {{currentAnimal.diet}}</p>
      <p>Caretakers Required: {{currentAnimal.caretakers}}</p>
      <p>Specific Likes: {{currentAnimal.likes}}</p>
      <p>Specific Dislikes: {{currentAnimal.dislikes}}</p>
      <p>Animal Exibit Currently Housing Selected Animal: {{currentAnimal.location}}</p>
      <img src={{currentAnimal.image}} class="largeimage"/>
    </div>


  `
})

export class AnimalDetailComponent {
  // @Output() newTaskSender = new EventEmitter();
  @Input() currentAnimal: Animal;
  @Input() showDetails: boolean;
}

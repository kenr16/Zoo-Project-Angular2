import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-detail',
  template: `
    <div *ngIf="selectedAnimal">
      <h1>Selected Animal Details:</h1><br>
      <p>Name: {{selectedAnimal.name}}</p>
      <p>Species: {{selectedAnimal.species}}</p>
      <p>Gender: {{selectedAnimal.sexd}}</p>
      <p>Age: {{selectedAnimal.age}}</p>
      <p>Diet: {{selectedAnimal.diet}}</p>
      <p>Caretakers Required: {{selectedAnimal.caretakers}}</p>
      <p>Specific Likes: {{selectedAnimal.likes}}</p>
      <p>Specific Dislikes: {{selectedAnimal.dislikes}}</p>
      <p>Animal Exibit Currently Housing Selected Animal: {{selectedAnimal.location}}</p>
      <img src={{selectedAnimal.image}}/>
    </div>


  `
})

export class AnimalDetailComponent {
  // @Output() newTaskSender = new EventEmitter();
  @Input() selectedAnimal: Animal;
}
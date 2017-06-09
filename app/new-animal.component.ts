import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `

    <div *ngIf="newAnimal">
      <h1>Animal Details</h1><br>

      <label>Animal Species:</label>
      <input [(ngModel)]="newAnimal.species" type='text' class='form-control'><br>

      <label>Animal Name:</label>
      <input [(ngModel)]="newAnimal.name" type='text' class='form-control'><br>

      <label>Animal Age:</label>
      <input [(ngModel)]="newAnimal.age" type='number' min="0" max="100" class='form-control'><br>

      <label>Animal Diet:</label>
      <input [(ngModel)]="newAnimal.diet" type='text' class='form-control'><br>

      <label>Number of Caretakers Required:</label>
      <input [(ngModel)]="newAnimal.caretakers" type='number' min="0" max="100" class='form-control'><br>

      <label>Animal Gender:</label>
      <input [(ngModel)]="newAnimal.sex" type='text' class='form-control'><br>

      <label>Enter Animal Likes:</label>
      <input [(ngModel)]="newAnimal.likes" type='text' class='form-control'><br>

      <label>Enter Animal Dislikes:</label>
      <input [(ngModel)]="newAnimal.dislikes" type='text' class='form-control'><br>

      <label>Enter An Image of the Animal (url link):</label>
      <input [(ngModel)]="newAnimal.image" type='text' class='form-control'><br>

      <label>Enter Good Profile Pic of the Animal (url link):</label>
      <input [(ngModel)]="newAnimal.logo" type='text' class='form-control'><br>

      <label>Location Housed at:</label>
      <select #animalLocation>
        <option [value]='1'> Africa </option>
        <option [value]='2'> Asia </option>
        <option [value]='3'> Europe </option>
      </select>
      <button (click)="submitForm(animalLocation.value);">Submit</button>

    </div>


  `
})

export class NewAnimalComponent {
  // @Output() newTaskSender = new EventEmitter();
  @Input() newAnimal: Animal;

  submitForm(location: number) {
    var locationString = ''
    if (location == 1) {
      locationString = 'Africa';
    } else if (location == 2) {
      locationString = 'Asia'
    } else {
      locationString = 'Europe'
    }
    this.newAnimal.location = locationString;
    this.newAnimal = null;
  }



}

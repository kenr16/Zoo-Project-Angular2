import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `

    <div *ngIf="animalToEdit">
      <h1>Animal Details</h1><br>

      <label>Animal Species:</label>
      <input [(ngModel)]="animalToEdit.species" type='text' class='form-control'><br>

      <label>Animal Name:</label>
      <input [(ngModel)]="animalToEdit.name" type='text' class='form-control'><br>

      <label>Animal Age:</label>
      <input [(ngModel)]="animalToEdit.age" type='number' min="0" max="100" class='form-control'><br>

      <label>Animal Diet:</label>
      <input [(ngModel)]="animalToEdit.diet" type='text' class='form-control'><br>

      <label>Number of Caretakers Required:</label>
      <input [(ngModel)]="animalToEdit.caretakers" type='number' min="0" max="100" class='form-control'><br>

      <label>Animal Gender:</label>
      <input [(ngModel)]="animalToEdit.sex" type='text' class='form-control'><br>

      <label>Enter Animal Likes:</label>
      <input [(ngModel)]="animalToEdit.likes" type='text' class='form-control'><br>

      <label>Enter Animal Dislikes:</label>
      <input [(ngModel)]="animalToEdit.dislikes" type='text' class='form-control'><br>

      <label>Enter An Image of the Animal (url link):</label>
      <input [(ngModel)]="animalToEdit.image" type='text' class='form-control'><br>

      <label>Enter Good Profile Pic of the Animal (url link):</label>
      <input [(ngModel)]="animalToEdit.logo" type='text' class='form-control'><br>

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

export class EditAnimalComponent {
  // @Output() newTaskSender = new EventEmitter();
  @Input() animalToEdit: Animal;
  @Output() editFinishedSender = new EventEmitter();

  submitForm(location: number) {
    var locationString = ''
    if (location == 1) {
      locationString = 'Africa';
    } else if (location == 2) {
      locationString = 'Asia'
    } else {
      locationString = 'Europe'
    }
    this.animalToEdit.location = locationString;
    this.animalToEdit = null;
    this.editFinishedSender.emit();
  }

}

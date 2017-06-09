import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AnimalListComponent } from './animal-list.component';
import { NewAnimalComponent } from './new-animal.component';
import { FormsModule }   from '@angular/forms';
import { AnimalDetailComponent } from './animal-detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, AnimalListComponent, NewAnimalComponent, AnimalDetailComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

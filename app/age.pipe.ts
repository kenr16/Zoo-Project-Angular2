import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "agepipe",
  pure: false
})


export class AgePipe implements PipeTransform {
  transform(input: Animal[], ageGroup, caretakersGroup) {
    var ageFiltered: Animal[] = [];
    var careFiltered: Animal[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].age <= ageGroup) {
        ageFiltered.push(input[i]);
      }
    }
    for (var i = 0; i < ageFiltered.length; i++) {
      if (ageFiltered[i].caretakers <= caretakersGroup) {
        careFiltered.push(ageFiltered[i]);
      }
    }

    return careFiltered;
  }
}

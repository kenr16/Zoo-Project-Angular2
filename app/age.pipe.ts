import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "agepipe",
  pure: false
})


export class AgePipe implements PipeTransform {
  transform(input: Animal[], ageGroup) {
    var output: Animal[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].age <= ageGroup) {
        output.push(input[i]);
      }
    }
    return output;
  }
}

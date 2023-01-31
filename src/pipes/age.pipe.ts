import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  transform(dob: Date): number {
    const birthdate = new Date(dob);
    return moment().diff(birthdate, 'years');
  }
}

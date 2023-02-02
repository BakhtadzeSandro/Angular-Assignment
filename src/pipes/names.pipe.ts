import { Pipe, PipeTransform } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Person } from 'src/app/app.service';

@Pipe({
  name: 'names'
})
export class NamesPipe implements PipeTransform {

  constructor(private appService: AppService) {}

  transform(persons: Person[]): string {
      return this.appService.persons.map(person => person.firstName).join(', ');
  }

}

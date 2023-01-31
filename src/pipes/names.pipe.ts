import { Pipe, PipeTransform } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Pipe({
  name: 'names'
})
export class NamesPipe implements PipeTransform {

  constructor(private appService: AppService) {}

  transform(value: any): any {
      return this.appService.persons.map(person => person.firstName).join(', ');
  }

}

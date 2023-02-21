import { Pipe, PipeTransform } from '@angular/core';
import { FormatoDisco } from './../models/interfaces';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: FormatoDisco[], filter: string): FormatoDisco[] {
    const lowerCaseFilter: string = filter.toLowerCase().trim();
    const filteredList: FormatoDisco[] = list.filter((el: FormatoDisco) => {
      return el.name.toLowerCase().includes(lowerCaseFilter);
    });

    return filteredList;
  }

}

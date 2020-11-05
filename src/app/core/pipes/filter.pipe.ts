import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peopleFilter'
})
export class PeopleFilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchPerson: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchPerson) {
      return items;
    }
    return items.filter(item => {
      let completeName = item.nombre + ' ' + item.apellido;
      return item.nombre.toLocaleLowerCase().includes(searchPerson.toLocaleLowerCase()) || item.apellido.toLocaleLowerCase().includes(searchPerson.toLocaleLowerCase()) || completeName.toLocaleLowerCase().includes(searchPerson.toLocaleLowerCase());
    });
  }

}

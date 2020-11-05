import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRegionsCommune'
})
export class FilterRegionsCommunePipe implements PipeTransform {

  transform(items: any[], searchRegion: string, searchCommune: string): any[] {
    if (items && items.length){
      return items.filter(item =>{
          if (searchRegion && item.direccion.region.toLowerCase().indexOf(searchRegion.toLowerCase()) === -1){
            return false;
          }
          if (searchCommune && item.direccion.comuna.nombre.toLowerCase().indexOf(searchCommune.toLowerCase()) === -1){
              return false;
          }
          return true;
     });
    } else{
        return items;
    }
  }

}

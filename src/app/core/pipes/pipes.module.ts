import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleFilterPipe } from './filter.pipe';
import { FilterRegionsCommunePipe } from './filter-regions-commune.pipe';



@NgModule({
  declarations: [PeopleFilterPipe, FilterRegionsCommunePipe],
  imports: [
    CommonModule
  ],
  exports: [
    PeopleFilterPipe,
    FilterRegionsCommunePipe
  ]
})
export class PipesModule { }

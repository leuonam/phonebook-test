import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './component/people.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { PersonDetailComponent } from './resources/person-detail/person-detail.component';


@NgModule({
  declarations: [PeopleComponent, PersonDetailComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
    PipesModule
  ]
})
export class PeopleModule { }

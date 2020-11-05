import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/core/services/apis.service';
import { ModalController } from '@ionic/angular';
import { PersonDetailComponent } from '../resources/person-detail/person-detail.component';
import { People } from 'src/app/core/models/people';
import { Regions } from 'src/app/core/models/regions';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  
  people: any;
  regions: any;
  communes: any;
  loading = true;
  searchPerson = '';
  searchRegion = '';
  searchCommune = '';
  selectCommunesIsDisabled: any;

  constructor(private apis: ApisService, public modalController: ModalController) { }

  async ngOnInit(): Promise<void> {
    await this.obtenerRegiones();
    await this.obtenerPersonas();

    this.selectCommunesIsDisabled = true;
  }

  async obtenerPersonas() {
    let person = [];
    let response = await this.apis.getPeople();

    if (response) {
      response.forEach(element => {
        element.apellido = decodeURIComponent(escape(element.apellido));

        let direccion = element.direccion;
      
        if (this.regions) {
          this.regions.forEach((regionObj: Regions) => {
            regionObj.comunas.forEach((comuna: { nombre: string; }) => {
              if (comuna.nombre.toLocaleLowerCase().includes(element.direccion.comuna.nombre.toLocaleLowerCase())) {
                direccion.region = regionObj.nombre;
              }
            });
          });
        }

        let objPerson: People = {
          id: element.id,
          nombre: element.nombre,
          apellido: element.apellido,
          direccion: element.direccion,
          rut: element.rut,
          telefono: element.telefono,
          activo: element.activo
        };

        person.push(objPerson);
      });

      this.people = person;
      this.loading = false;
    }
  }

  async obtenerRegiones() {
    let response = await this.apis.getRegions();
    if (response) {
      this.regions = response;
    }
  }

  seeDetail(obj) {
    this.presentPerson(obj);
  }

  onChangeRegions(e) {
    if (e === '') {
      this.selectCommunesIsDisabled = true;
      this.communes = [];
      this.searchCommune = '';
    }
    if (this.regions) {
      this.regions.forEach(element => {
        if (element.nombre === e) {
          this.selectCommunesIsDisabled = false;
          this.communes = element.comunas;
        }
      });
    }
  }

  onChangeCommunes(e) {
    if (e === '' && this.searchRegion === '') this.selectCommunesIsDisabled = true;
  }

  async presentPerson(person: any) {
    const modal = await this.modalController.create({
      component: PersonDetailComponent,
      cssClass: 'my-custom-class',
      componentProps: { person }
    });
    return await modal.present();
  }
}

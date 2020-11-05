import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { parse } from 'libphonenumber-js';
import * as googleLibphonenumber from 'google-libphonenumber';


import { RutService } from 'rut-chileno';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  validate: any;
  person: any;
  validNumber: any;
  validPhone: any;

  constructor(public modalController: ModalController, private rutService: RutService) { }

  ngOnInit(): void {
    this.validateRut(this.person.rut);
    this.validateMobile(this.person.telefono)
  }

  validateRut(rut: string): void {
    this.validate = this.rutService.validaRUT(rut);
  }

  validateMobile (number) {
      let numberSg = '+'+number;
      const phoneUtil = googleLibphonenumber.PhoneNumberUtil.getInstance();
      const phoneNumber = phoneUtil.parse(numberSg);
      const valid = phoneUtil.isPossibleNumberWithReason(phoneNumber);

      let parseNumber = parse(numberSg);

      if (valid === 0 && Object.keys(parseNumber).length > 0) {
        this.validPhone = false;
      } else {
        this.validPhone = true;
      }
  }

  closeModal() {
    this.modalController.dismiss();
  }

}

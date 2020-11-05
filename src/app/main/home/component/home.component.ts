import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/core/services/apis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apis: ApisService) { }

  ngOnInit(): void {
  }

}

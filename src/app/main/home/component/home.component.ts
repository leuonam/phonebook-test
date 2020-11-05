import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private menu: MenuController, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goPage(page: any) {
    this.router.navigate([page], { relativeTo: this.route });
    this.menu.close();
  }

}

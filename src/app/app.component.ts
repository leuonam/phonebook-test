import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'phonebook-test';

  constructor(private menu: MenuController, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  goPage(page: any) {
    this.router.navigate([page], { relativeTo: this.route });
    this.menu.close();
  }
  
}

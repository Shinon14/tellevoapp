import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ReestablecerPage } from '../reestablecer/reestablecer.page';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController ) { }
  
  otraPagina() {
    this.navCtrl.push(ReestablecerPage);
  }
}

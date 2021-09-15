import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { RegisterPage } from '../register/register.page';
import { ReestablecerPage } from '../reestablecer/reestablecer.page';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {


  constructor(
    public modalController: ModalController,

  ) { }

  ngOnInit() {
  }


  async login() {
    const modal = await this.modalController.create({
      component: LoginPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'login-modal',
    })

    return await modal.present();
  }

  async register() {
    const modal = await this.modalController.create({
      component: RegisterPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'register-modal',
    })

    return await modal.present();
  }
  async reestablecer() {
    const modal = await this.modalController.create({
      component: ReestablecerPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'reestablecer-modal'
    });
    return await modal.present();
  }


   
}

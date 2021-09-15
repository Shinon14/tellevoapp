import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }


  ngOnInit() {
  }
  async dissmiss() {
    await this.modalCtrl.dismiss();
  }

  registrar() {
    this.modalCtrl.dismiss();
  }
  
  async homer() {
    const modal = await this.modalCtrl.create({
      component: LoginPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'login-modal',
    })
  }
}

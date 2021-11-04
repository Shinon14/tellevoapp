import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private modalCtrl: ModalController, private apiService: ApiService) { }


  ngOnInit() {
  }
  async dissmiss() {
    await this.modalCtrl.dismiss();
  }

  registrar() {
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

  saveUser(user, passUser, nombreCompleto) {
    this.apiService.createUser(user.value, passUser.value, nombreCompleto.value).subscribe(
      (res) => {
        console.log(res);
      }
    )
    // this.modalCtrl.dismiss();

  }
}

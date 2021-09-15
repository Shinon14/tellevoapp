import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],
})
export class ReestablecerPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dissmiss() {
    this.modalController.dismiss();
  }
  reecuperar() {
    this.modalController.dismiss();
  }
}

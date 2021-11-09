import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  users: any = [];
  precios: any = [];



  constructor(private menu: MenuController, private api: ApiService) { }
    
  ionViewWillEnter() {
    this.menu.enable(true);
  }

  ngOnInit() {
    this.api.getConductor().subscribe(
      (res) => {
        this.users = res
      },
      (err) => {
        console.log(err);
      }
    )
    this.api.getPrecios().subscribe(
      (res) => {
        this.precios = res
      },
      (err) => {
        console.log(err);
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService, Hist } from '../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {
  users: any = [];
  precios: any = [];
  historial: any = [];

  constructor(
    private menu: MenuController,
    private api: ApiService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.menu.enable(true);
  }

  ngOnInit() {
    this.api.getConductor().subscribe(
      (res) => {
        this.users = res;
      },
      (err) => {
        console.log(err);
      }
    );
    this.api.getPrecios().subscribe(
      (res) => {
        this.precios = res;
      },
      (err) => {
        console.log(err);
      }
    );
    this.api.getHistorial().subscribe(
      (res) => {
        this.historial = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  saveHistorial(precioCobrado, conductor, cantPasajero, recorrido) {
    this.api
      .createHistorial(precioCobrado.value, conductor.value, cantPasajero.value, recorrido.value)
      .subscribe((res) => {
        console.log(res);
      });
  }

  // savePost() {
  //   this.api.createHistorial(this.api.precioCobrado, this.api.conductor, this.api.cantPasajero, this.api.recorrido).subscribe(
  //     (res) => {
  //       this.router.navigate(['/posts']);
  //     },
  //     (err) => console.error(err)
  //   );
  // }
}

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService} from '../services/api.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 
  users: any = []
  precios: any = []
  tipoVehiculo: any = []

  constructor(private menu: MenuController, private apiServices:ApiService) { }




  user = {
    nombre: ' Fernando',
    usuario: '',
    contrasena: '',
    apellido: '',
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  
  getTotal(precio, persona){
   var total = precio * persona
   console.log()
   return total
  }

  ngOnInit() {
    this.apiServices.getUser().subscribe(
      (res) => {
        this.users = res
        console.log(this.users)
      },
      (err) => console.log(err)
    );
    this.apiServices.getPrecios().subscribe(
      (res) => {
        this.precios = res
        console.log(this.precios)
      }

    );
    this.apiServices.getTipoVehiculo().subscribe(
      (res) => {
        this.tipoVehiculo = res
        console.log(this.tipoVehiculo)
      }
    );
  }



}
  

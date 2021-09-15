import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(private menu: MenuController,) { }

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
   console.log(total)
   return total
  }
  
}
  

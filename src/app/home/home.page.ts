import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(){

  }
  getTotal(precio){
   var total = precio * 2400
   console.log(total)
   return precio
  }
  
}

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
  getTotal(precio, persona){
   var total = precio * persona
   console.log(total)
   return total
  }
  
}
  
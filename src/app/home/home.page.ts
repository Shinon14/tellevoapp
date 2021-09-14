import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ViewController } from '@ionic/core';


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
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { Environment, GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsAnimation, GoogleMapsEvent, MyLocation } from '@ionic-native/google-maps';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  @ViewChild('map', {static:true}) mapElement:any;
  private loading: any;
  private map: GoogleMap;
  constructor( private platform: Platform,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.mapElement = this.mapElement.nativeElement;
    this.mapElement.style.width =  this.platform.width() + 'px';
    this.mapElement.style.height = this.platform.height() + 'px';


    this.loadMap();
  }
  async loadMap(){
    this.loading = await this.loadingCtrl.create({message:'Espere'});
    await this.loading.present();
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDiZAAtZ1BpmquerB4I_RrV4vjqcUyIbGQ',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDiZAAtZ1BpmquerB4I_RrV4vjqcUyIbGQ'
    });

    const mapOptions: GoogleMapOptions ={
      controls:{
        zoom:false
      }
    };

    this.map =  GoogleMaps.create(this.mapElement, mapOptions);
    try {
      await  this.map.one(GoogleMapsEvent.MAP_READY);

      this.addOriginMarker();
    } catch (error) {
      console.log(error);
    }
   
  }
  async addOriginMarker(){
    try{
      const myLocation: MyLocation = await this.map.getMyLocation();
      await this.map.moveCamera({
        target: myLocation.latLng,
        zoom: 18
      });
      this.map.addMarkerSync({
        title: 'Origen',
        icon: '#000',
        animation: GoogleMapsAnimation.DROP,
        position: myLocation.latLng
      });
    }catch(error){
      console.log(error);
    }finally{
      this.loading.dismiss();
    }
  
  }
}


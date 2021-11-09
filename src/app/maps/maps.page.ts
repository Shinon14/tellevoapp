import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { Environment, Geocoder, GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsAnimation, GoogleMapsEvent, ILatLng, Marker, MyLocation } from '@ionic-native/google-maps';
import { ThrowStmt } from '@angular/compiler';
import { POINT_CONVERSION_HYBRID } from 'constants';

declare let google:any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  @ViewChild('map', {static:true}) mapElement:any;
  private loading: any;
  private map: GoogleMap;
  public search: string = '';
  private googleAutocomplete = new google.maps.places.AutocompleteService();
  public searchResults = new Array<any>();
  private originMarker : Marker;
  private destination:any; 
  private googleDirectionsService = new google.maps.DirectionsService();
  constructor( private platform: Platform,
              private loadingCtrl: LoadingController,  
              private ngZone: NgZone
  ){}

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
      this.originMarker = this.map.addMarkerSync({
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

  searchChanged(){
    if(!this.search.trim().length) return;
    this.googleAutocomplete.getPlacePredictions({ input: this.search }, predictions =>{
      this.ngZone.run(() =>{
        this.searchResults = predictions;
      }); 
    });
  }


  async calcRoute(item:any){
    this.search = '';
    this.destination = item;
    const info: any = await Geocoder.geocode({address:this.destination.description});
    let markerDestination : Marker = this.map.addMarkerSync({
      title: this.destination.description,
      icon: '#000',
      animation: GoogleMapsAnimation.DROP,
      position: info[0].position
      
    });

    this.googleDirectionsService.routes({
      origin: this.originMarker.getPosition(),
      destination: markerDestination.getPosition(),
      travelmMode: 'DRIVING'
    }, async results =>{
      const points = new Array<ILatLng>();
      const routes = results.routes[0].overview_path;
      for (let i = 0; i < routes.length; i++){
        points[i] = {
          lat: routes[i].lat(),
          lng: routes[i].lng(),
        }
      }
      await this.map.addPolyline({
        points: points,
        color: '#000',
        width: 3
      }); 
      this.map.moveCamera({target: points});
    });

 
  }

  async back(){
    try {
      await this.map.clear();
      this.destination = null;
    } catch (error) {
      console.log(error);
    }
  }
  
}


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReestablecerPage } from './reestablecer/reestablecer.page';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GoogleMaps} from '@ionic-native/google-maps';
@NgModule({
  declarations: [AppComponent, ReestablecerPage],
  entryComponents: [ReestablecerPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, GoogleMaps],
  bootstrap: [AppComponent],
})
export class AppModule {}

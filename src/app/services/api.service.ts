import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface userMain{
  id: string,
  user: string;
  passUser: string;
  email: string;
  nombreCompleto: string;
  }

export interface Hist{
  precioCobrado: string,
  conductor: string,
  cantPasajero: string,
  recorrido: string,
  }

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  api ='http://localhost:1337/usuarios'
  apiHistorial = 'http://localhost:1337/historials'
  apiVehiculo = 'http://localhost:1337/vehiculos'
  apiPrecio = 'http://localhost:1337/precios'
  apiConductor = 'http://localhost:1337/conductors'
  constructor(
    private http: HttpClient
  ) { }

  getUser() {
    return this.http.get(this.api)

  }


  getUserById(id: number) {
  }

  createUser(user: string, passUser: string, nombreCompleto: string, email:string) {
    return this.http.post(this.api, {
      user, passUser, email, nombreCompleto
    })
  }

  deleteUser() {
    
  }

  // estas seran las functions para el GET y POST de precios

  getPrecios() {
    return this.http.get(this.apiPrecio)
  }

    // estas seran las functions para el GET y POST de vehiculos
  getTipoVehiculo() {
    return this.http.get(this.apiVehiculo)
  }


    // estas seran las functions para el GET y POST de historiales
  getHistorial() {
    return this.http.get(this.apiHistorial)
  }
  
  createHistorial(precioCobrado: string, conductor: string, cantPasajero: string, recorrido: string) {
    return this.http.post(this.apiHistorial, {
      precioCobrado, conductor, cantPasajero, recorrido
    })
    
  }

  // estas seran las functions para el GET y POST de conductores
  getConductor() {
    return this.http.get(this.apiConductor)
  }
  updateConductor() {
    
  }

  createConductor(user: string, passUser: string, nombreCompleto: string, email: string) {
    return this.http.post(this.apiConductor, {
      user, passUser, nombreCompleto, email
    })
  }


  // estas seran las functions para el GET y POST de imagenes random para los perfiles


  getImagenes() {
    return this.http.get('https://source.unsplash.com/random')
  }

}

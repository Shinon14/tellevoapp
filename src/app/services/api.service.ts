import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {


  api ='http://localhost:1337/usuarios'


  constructor(
    private http: HttpClient
  ) { }

  getUser() {
    return this.http.get(this.api)
  }


  getUserById(id: number) {
  }

  createUser(user: string, passUser: string, nombreCompleto: string) {
    return this.http.post(this.api, {
      user, passUser, nombreCompleto
    })
  }

  deleteUser() {
    
  }

  // estas seran las functions para el GET y POST de precios

  getPrecios() {
    return this.http.get("http://localhost:1337/precios")
  }

  getTipoVehiculo() {
    return this.http.get("http://localhost:1337/vehiculos")
  }

}

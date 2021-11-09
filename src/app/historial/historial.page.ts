import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }

  history: any;

  loadPost() {
    this.apiService.getHistorial().subscribe(
      (res) => {
        console.log(res)
        this.history = res;
      },
      (err) => console.log(err)

    );
  }


  ngOnInit() {
    this.loadPost();
  }

}

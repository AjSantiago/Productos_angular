import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPage = {};
  loaded = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    //Read JSON
    this.http
      .get('../../assets/data/data-page.json')
      .subscribe((resp: InfoPage) => {
        this.loaded = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    //Read JSON
    this.http
      .get(
        'https://angular-template-9780d-default-rtdb.firebaseio.com/equipo.json'
      )
      .subscribe((resp: any) => {
        this.equipo = resp;
      });
  }
}

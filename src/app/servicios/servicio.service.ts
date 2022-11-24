import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


import { opcionesMenu } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  //se inyecta HttpClient,HttpClientModule de debe importar en appModules
  constructor(private http:HttpClient) { }
  
  obtenerOpcionesMenu(){
    return this.http.get<opcionesMenu[]>('/assets/menu/opcionesMenu.json');
  }
}

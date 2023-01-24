import { Component, OnDestroy, OnInit } from '@angular/core';

import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-ubicacionlocal',
  templateUrl: './ubicacionlocal.page.html',
  styleUrls: ['./ubicacionlocal.page.scss'],
})
export class UbicacionlocalPage implements OnInit,OnDestroy {
  //inicializaremos el mapa
  map!: Leaflet.Map;
  constructor() { }

  ngOnInit() {
    //Para corregir el error de la img (marcado) no encontrada ,se modifica la ruta
    //donde se reubicaron lis iconos
    Leaflet.Icon.Default.imagePath = "/assets/marcadoresMaps/" 
     }


    ionViewDidEnter(){
    if (!this.map){
      this.cargarMapaLeaflet();
    }
    // else{
    //   console.log('El mapa 1 fue ya inicializado')
    // }
    
  }

  cargarMapaLeaflet(){
    //console.log('cargando MAPA1');
    //configuraremos su vista a nuestras coordenadas geográficas elegidas y un nivel de zoom:
     this.map = Leaflet.map('mapaId').setView([19.097152, -96.157876], 14);

     Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
       attribution: 'edupala.com © Angular LeafLet',
     }).addTo(this.map);
     Leaflet.marker([19.097152, -96.157876]).addTo(this.map)
     .bindPopup('Cafixa<br> Café Veracruzano<br> Nicho de Nogal #51').openPopup();
  }
 
  //  ionViewWillLeave() {
  //   this.map.remove();
  //   console.log('terminado will');
  //   }

    ngOnDestroy() {
      this.map.remove();
      //console.log('terminado destry MAPA 1');
   }

}

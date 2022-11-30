import { Component, OnInit } from '@angular/core';

import * as Leaflet from 'leaflet';
// import { antPath } from 'leaflet-ant-path';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  constructor() { }
  
  //inicializaremos el mapa
  map!: Leaflet.Map;
  ngOnInit() {
    //Para corregir el error de la img (marcado) no encontrada ,se modifica la ruta
    //donde se reubicaron lis iconos
    Leaflet.Icon.Default.imagePath = "/assets/marcadoresMaps/" 
  }


  ionViewDidEnter() {
    //configuraremos su vista a nuestras coordenadas geográficas elegidas y un nivel de zoom:
    this.map = Leaflet.map('mapId').setView([19.097152, -96.157876], 14);

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);
    Leaflet.marker([19.097152, -96.157876]).addTo(this.map).bindPopup('Cafixa<br> Café Veracruzano').openPopup();

    // antPath([[28.644800, 77.216721], [34.1526, 77.5771]],
    //   { color: '#FF0000', weight: 5, opacity: 0.6 })
    //   .addTo(this.map);
  }

  ngOnDestroy() {
    this.map.remove();
  }
  
}

import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Popup } from 'mapbox-gl';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-ubicacionclientes',
  templateUrl: './ubicacionclientes.page.html',
  styleUrls: ['./ubicacionclientes.page.scss'],
})
export class UbicacionclientesPage implements OnInit {
  map!:mapboxgl.Map;
  constructor() {
    (mapboxgl as any).accessToken= environment.mapbox_key;
   }

  ngOnInit() {
  }
  
  ionViewDidEnter(){
    if (!this.map){
      this.cargarMapaMapBox();
    }
    // else{
    //   console.log('El mapa 2 fue ya inicializado')
    // }
  }

  cargarMapaMapBox(){
    //console.log('cargando MAPA2');
    this.map = new mapboxgl.Map({
      container: 'mapaIdMB', // container ID
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-96.157876, 19.097152], // starting position [lng, lat]
      zoom: 14.5 // starting zoom
      });
      this.mostrarMarcador(-96.157876, 19.097152);
  }
 
  mostrarMarcador(lng:number,lat:number){
    // Add zoom and rotation controls to the map.
     this.map.addControl(new mapboxgl.NavigationControl());

     const infoPopup= new Popup().setHTML(`<h5>Cafixa</h5><br> Nicho de Nogal #41`);
     // Create a default Marker and add it to the map.Coloca el color especificado
     const marker1 = new mapboxgl.Marker({ color: 'black', rotation: 15})
     .setLngLat([lng, lat])
     .setPopup(infoPopup)
     .addTo(this.map);  
  }

  ngOnDestroy() {
    this.map.remove();
    //console.log('terminado destry MAPA 2');
  }

}









// cargarMapaMapBox(){
//   console.log('cargando MAPA2');
//   const map = new mapboxgl.Map({
//     container: 'mapaIdMB', // container ID
//     // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
//     style: 'mapbox://styles/mapbox/streets-v12', // style URL
//     center: [-96.157876, 19.097152], // starting position [lng, lat]
//     zoom: 14.5 // starting zoom
//     });
    
//     // Add zoom and rotation controls to the map.
//     map.addControl(new mapboxgl.NavigationControl());
//     // Create a default Marker and add it to the map.Coloca el color especificado y con
       //draggable permite mover el marcador
//     const marker1 = new mapboxgl.Marker({ color: 'black', rotation: 15 , draggable:true})
//     .setLngLat([-96.157876, 19.097152])
//     .addTo(map);

//Permite obtener las coordenadas cuado se mueve el marcador
// marker1.on('drag',() =>{
//   console.log(marker1.getLngLat());
//  })


//     map.resize();
// }
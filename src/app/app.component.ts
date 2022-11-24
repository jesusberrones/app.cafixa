import { Component } from '@angular/core';

import { opcionesMenu } from './interfaces/interface';
import { ServicioService } from './servicios/servicio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // creamos una propiedad de tipo Observable para guardar la informacion el JSON;
  menuPrincipal:Observable<opcionesMenu[]>;
  
  constructor(private servicioService:ServicioService) {
    //Asignamos a la variable menuPrincipal la informacion del archivo JSON
    this.menuPrincipal=this.servicioService.obtenerOpcionesMenu();
  }
}

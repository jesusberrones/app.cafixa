import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbicacionPageRoutingModule } from './ubicacion-routing.module';

import { UbicacionPage } from './ubicacion.page';
import { ComponenteModule } from '../../componentes/componente/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicacionPageRoutingModule,
    //Importamos el modulo para poder acceder a los componentes de encabezado
    ComponenteModule
  ],
  declarations: [UbicacionPage]
})
export class UbicacionPageModule {}

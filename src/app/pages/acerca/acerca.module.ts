import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcercaPageRoutingModule } from './acerca-routing.module';

import { AcercaPage } from './acerca.page';
import { ComponenteModule } from '../../componentes/componente/componente.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcercaPageRoutingModule,
    //Importamos el modulo para poder acceder a los componentes de encabezado
    ComponenteModule
  ],
  declarations: [AcercaPage]
})
export class AcercaPageModule {}

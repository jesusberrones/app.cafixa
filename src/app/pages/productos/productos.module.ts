import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosPageRoutingModule } from './productos-routing.module';

import { ProductosPage } from './productos.page';
import { ComponenteModule } from '../../componentes/componente/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosPageRoutingModule,
    //Importamos el modulo para poder acceder a los componentes de encabezado
    ComponenteModule
  ],
  declarations: [ProductosPage]
})
export class ProductosPageModule {}

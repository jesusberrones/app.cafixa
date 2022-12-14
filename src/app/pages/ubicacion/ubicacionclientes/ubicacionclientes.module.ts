import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbicacionclientesPageRoutingModule } from './ubicacionclientes-routing.module';

import { UbicacionclientesPage } from './ubicacionclientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicacionclientesPageRoutingModule
  ],
  declarations: [UbicacionclientesPage]
})
export class UbicacionclientesPageModule {}

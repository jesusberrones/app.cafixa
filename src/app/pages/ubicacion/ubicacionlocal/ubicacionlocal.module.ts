import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbicacionlocalPageRoutingModule } from './ubicacionlocal-routing.module';

import { UbicacionlocalPage } from './ubicacionlocal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicacionlocalPageRoutingModule
  ],
  declarations: [UbicacionlocalPage]
})
export class UbicacionlocalPageModule {}

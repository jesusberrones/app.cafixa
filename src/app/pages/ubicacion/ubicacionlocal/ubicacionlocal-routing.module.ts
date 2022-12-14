import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbicacionlocalPage } from './ubicacionlocal.page';

const routes: Routes = [
  {
    path: '',
    component: UbicacionlocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbicacionlocalPageRoutingModule {}

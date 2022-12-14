import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbicacionclientesPage } from './ubicacionclientes.page';

const routes: Routes = [
  {
    path: '',
    component: UbicacionclientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbicacionclientesPageRoutingModule {}

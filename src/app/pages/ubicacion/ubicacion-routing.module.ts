import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbicacionPage } from './ubicacion.page';

const routes: Routes = [
   {
     path:'',
     redirectTo:'/ubicacion/ubicacionCafixa',
     pathMatch:'full',
   },
  {
    path: '',
    component: UbicacionPage,
    children:[
      {
        path:'ubicacionCafixa',
        loadChildren:() => import ('../ubicacion/ubicacionlocal/ubicacionlocal.module').then(m => m.UbicacionlocalPageModule)
      },
      {
        path:'ubicacionClientes',
        loadChildren:() => import('../ubicacion/ubicacionclientes/ubicacionclientes.module').then(m=>m.UbicacionclientesPageModule)
      }
    ]
  },
  {
    path: 'ubicacionclientes',
    loadChildren: () => import('./ubicacionclientes/ubicacionclientes.module').then( m => m.UbicacionclientesPageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbicacionPageRoutingModule {}

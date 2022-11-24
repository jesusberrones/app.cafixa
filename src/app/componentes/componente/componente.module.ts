import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    //Declaramos los componentes a utilizar en el modulo mas proximo
    HeaderComponent
  ],
  imports: [
    CommonModule,
     //Para que sepa de donde se obtendran los componentes personalizados el encabezado.component.html
     IonicModule
  ],
  exports:[
    //Exportamos el componente para que pueda ser utilizado
    HeaderComponent
  ]
})
export class ComponenteModule { }

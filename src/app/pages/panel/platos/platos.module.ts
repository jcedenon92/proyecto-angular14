import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatosRoutingModule } from './platos-routing.module';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [FormularioComponent, ListaComponent],
  imports: [CommonModule, PlatosRoutingModule],
})
export class PlatosModule {}

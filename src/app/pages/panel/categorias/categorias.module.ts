import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { FormularioCateComponent } from './formulario-cate/formulario-cate.component';
import { ListaComponent } from './lista/lista.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [FormularioCateComponent, ListaComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    NzTableModule,
    NzDividerModule,
  ],
})
export class CategoriasModule {}

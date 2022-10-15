import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: 'categorias',
        loadChildren: () =>
          import('./categorias/categorias.module').then(
            (m) => m.CategoriasModule
          ),
      },
      {
        path: 'platos',
        loadChildren: () =>
          import('./platos/platos.module').then((m) => m.PlatosModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}

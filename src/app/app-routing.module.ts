import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './pages/login/guard/authentication.guard';
import { LoginComponent } from './pages/login/login.component';
import { PanelComponent } from './pages/panel/panel.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    //component: PanelComponent,
    loadChildren: () =>
      import('./pages/panel/panel.module').then((m) => m.PanelModule),
    canActivate: [AuthenticationGuard], //valida para ingresar a home
  },
  {
    path: '**',
    redirectTo: '', //redirecTo-> eliges la ruta donde se redirecciona
    pathMatch: 'full', //full-> detecta MAY o min
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

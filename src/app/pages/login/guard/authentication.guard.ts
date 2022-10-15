import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const AUTH = localStorage.getItem('token');
    if (AUTH) {
      return true;
    }
    //this.router.navigate(['/editar-producto', 1234, 'form']); navigate()-> acepta la url con parametros y forma la url.
    this.router.navigateByUrl('/'); // navigateByUrl()-> acepta la url en cadena.
    return false;
  }
}

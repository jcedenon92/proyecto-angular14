import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    ReactiveFormsModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }

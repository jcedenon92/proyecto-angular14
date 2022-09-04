import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup | undefined;

  constructor( private fb: FormBuilder, private authService: AuthService ) {
  }

  ngOnInit(): void {
    console.log('ng on init');
    this.loadForm();
  }

  private loadForm(){
    this.formLogin = this.fb.group({
      email: [
        'jorge@prueba.com',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9._-]+\\.[a-z]{2,4}$')
        ]
      ],
      password: [ null, [ Validators.required]]
    });
  }

  desactivarEmail(){
    // this.formLogin?.get('email')?.setValidators([Validators.required]);
    // this.formLogin?.get('email')?.setValue('usuario@gmail.com');
    // const local = localStorage.getItem('formulario');
    // if(local) {
    //   console.log( JSON.parse(local));
    // }
  }

  login(){
    if( this.formLogin?.valid){
      const { email, password } = this.formLogin.value;
      this.authService.login(email, password).subscribe((data: any) => {
          console.log('EL TOKEN ES: ', data.token);
        }
      );
    }
  }

}

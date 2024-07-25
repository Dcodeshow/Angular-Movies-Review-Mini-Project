import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private _AuthServices: AuthService, private Router: Router) {}

  Login(): void {
    if (this.username.length === 0) {
      this.errorMessage = 'Please enter a username';
    } else if (this.password.length === 0) {
      this.errorMessage = 'Please enter a password';
    } else {
      this.errorMessage = '';
      let loginDetails = this._AuthServices.login(this.username, this.password);
      if (loginDetails === 200) {
        this.Router.navigate(['/home']);
      } else if (loginDetails === 403) {
        this.errorMessage = 'Invalid credentials';
      }
    }
  }
}

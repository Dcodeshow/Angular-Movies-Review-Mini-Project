import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private Router: Router, private _AuthServices: AuthService) {}

  gotoHome(): void {
    this.Router.navigate(['/login']);
  }

  logout() {
    this._AuthServices.logout();
  }
}

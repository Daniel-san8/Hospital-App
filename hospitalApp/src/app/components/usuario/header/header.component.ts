import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  logout() {
    this.cookies.delete('token');
    this.cookies.delete('ROLE');
  }
  userName = this.user.nameUser ?? 'USER';

  constructor(private cookies: CookieService, protected user: UserService) {}
}

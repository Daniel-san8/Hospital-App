import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  logout() {
    this.cookies.delete('token');
    this.cookies.delete('ROLE');
    localStorage.removeItem('nameUser');
  }
  userName?: string;

  ngOnInit() {
    this.userName = localStorage.getItem('nameUser') ?? 'USER';
  }

  constructor(private cookies: CookieService) {}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../authentification/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn : Observable<boolean>;
  constructor(private authService: AuthService, private router: Router) { 
    this.isLoggedIn = authService.isLoggedIn();
  }

  ngOnInit(): void {
  }

  logout()
  {
    this.authService.logoutSaveState();
    this.router.navigateByUrl('/login');
  }

}

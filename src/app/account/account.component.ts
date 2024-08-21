import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: any = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadUserData();
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  loadUserData() {
    const userData = sessionStorage.getItem('sessionUser');
    if (userData) {
      try {
        this.user = JSON.parse(userData);
      } catch (error) {
        console.error('Error parsing user data from sessionStorage:', error);
        this.user = null;
      }
    }
  }
}

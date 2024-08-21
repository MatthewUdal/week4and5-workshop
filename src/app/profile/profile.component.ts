import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = null;

  constructor() { }

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
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


  onSubmit(): void {
    if (this.user) {
      try {
        const userJson = JSON.stringify(this.user);

        sessionStorage.setItem('sessionUser', userJson);
        alert("User Data Updated!")

        console.log('User data saved to sessionStorage:', userJson);
      } catch (error) {
        console.error('Error saving user data to sessionStorage:', error);
      }
    } else {
      console.log('No user data to save.');
    }
  }


}

import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import {AccountComponent} from './account/account.component';
import {LoginComponent} from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch:'full' },
    { path: 'login', component: LoginComponent },
    { path: 'account', component: AccountComponent, canActivate: [authGuard] },
    { path: 'profile', component: ProfileComponent,canActivate: [authGuard] }
];

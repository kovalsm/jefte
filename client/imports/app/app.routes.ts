import { Routes } from '@angular/router';

import{RegisterPage} from '../pages/register/register';
import{InfoPage} from '../pages/info/info';
import {LoginPage} from "../pages/login/login";

export const routes: Routes = [
    {path: 'register', component: RegisterPage},
    {path: 'info/:register_id', component:InfoPage},
    {path: 'login', component:LoginPage},
    {path:'', redirectTo:'/login', pathMatch:'full'}
    ];


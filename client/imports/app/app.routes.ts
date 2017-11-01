import { Routes } from '@angular/router';

import{RegisterPage} from '../pages/register/register';
import{InfoPage} from '../pages/info/info';
import {LoginPage} from "../pages/login/login";
import { TemperaturePage} from '../pages/actions/temperature/temperature';

export const routes: Routes = [
    {path: 'register', component: RegisterPage},
    {path: 'info', component:InfoPage},
    {path: 'temperature', component : TemperaturePage},
    {path: 'login', component:LoginPage},
    {path:'', redirectTo:'/login', pathMatch:'full'}
    ];


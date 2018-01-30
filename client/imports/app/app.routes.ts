import { Routes } from '@angular/router';

import{RegisterPage} from '../pages/register/register';
import{InfoPage} from '../pages/info/info';
import {LoginPage} from "../pages/login/login";
import { TemperaturePage} from '../pages/actions/temperature/temperature';
import { PressurePage} from '../pages/actions/pressure/pressure';

export const routes: Routes = [
    {path: 'register', component: RegisterPage},
    {path: 'info', component:InfoPage},
    {path: 'temperature', component : TemperaturePage},
    {path: 'pressure', component : PressurePage},
    {path: 'login', component:LoginPage},
    {path:'', redirectTo:'/login', pathMatch:'full'}
    ];


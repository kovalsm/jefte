import { Routes } from '@angular/router';

import{RegisterPage} from '../pages/register/register';
import{InfoPage} from '../pages/info/info';

export const routes: Routes = [
    {path: 'register', component: RegisterPage},
    {path: 'info', component:InfoPage},
    {path:'', redirectTo:'/register', pathMatch:'full'}
    ];


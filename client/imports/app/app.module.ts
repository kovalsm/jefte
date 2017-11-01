import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {RegisterPage} from '../pages/register/register';
import {InfoPage} from '../pages/info/info';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {AccountsModule} from 'angular2-meteor-accounts-ui';
import {LoginPage} from "../pages/login/login";

@NgModule({
    declarations: [
        MyApp,
        RegisterPage,
        InfoPage,
        LoginPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        BrowserModule,
        RouterModule.forRoot(routes, {enableTracing: true})
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        RegisterPage,
        InfoPage,
        LoginPage
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
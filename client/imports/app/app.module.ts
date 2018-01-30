import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {RegisterPage} from '../pages/register/register';
import {InfoPage} from '../pages/info/info';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {LoginPage} from "../pages/login/login";
import {TemperaturePage} from "../pages/actions/temperature/temperature";
import {MyModal} from "../pages/actions/temperature/temperature-modal";
import {PressurePage} from "../pages/actions/pressure/pressure";
import {MyModalPressure} from "../pages/actions/pressure/pressure-modal";
import {MyModalAddPerson} from "../pages/register/addPerson/addPerson-modal";

@NgModule({
    declarations: [
        MyApp,
        RegisterPage,
        InfoPage,
        LoginPage,
        TemperaturePage,
        PressurePage,
        MyModalPressure,
        MyModal,
        MyModalAddPerson

    ],
    imports: [
        IonicModule.forRoot(MyApp),
        BrowserModule,
        RouterModule.forRoot(routes, {enableTracing: true})
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,MyModal,MyModalPressure,MyModalAddPerson
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RegisterPage } from '../pages/register/register';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    declarations: [
        MyApp,
        RegisterPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        BrowserModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        RegisterPage
    ],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {}
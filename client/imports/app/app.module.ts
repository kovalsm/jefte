import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RegisterPage } from '../pages/register/register';
import { InfoPage} from '../pages/info/info';
import { BrowserModule} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';



@NgModule({
    declarations: [
        MyApp,
        RegisterPage,
        InfoPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        BrowserModule,
        RouterModule.forRoot(routes,{enableTracing: true})
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        RegisterPage,
        InfoPage
    ],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {}
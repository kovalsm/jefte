import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

@Component({
    template: '<router-outlet></router-outlet>'
})
export class MyApp {
    constructor(platform: Platform) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            if (platform.is('cordova')) {
                StatusBar.styleDefault();
                Splashscreen.hide();
            }
        });
    }
}
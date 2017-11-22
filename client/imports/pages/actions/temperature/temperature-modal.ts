import { Component } from '@angular/core';
import { ViewController, AlertController} from 'ionic-angular';
import template from './temperature-modal.html'
import {Actions} from '../../../../../both/collections/actions';
;

@Component({
    template
})
export class MyModal {
    constructor( private viewCtrl:ViewController, private alertCtrl: AlertController) {

    }
    private temperature : string = this.temperature;
    close(){
        this.viewCtrl.dismiss();
    }
    add() {
        let confirm = this.alertCtrl.create({
            title: 'Ste si istý?',
            buttons: [
                {
                    text: 'Áno',
                    handler: () => {

                            this.viewCtrl.dismiss({'temperature':this.temperature});
                    }
                },
                {
                    text: 'Nie'
                }
            ]
        });

        confirm.present();
    }
}

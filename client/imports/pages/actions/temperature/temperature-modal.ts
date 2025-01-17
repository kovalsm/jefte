import {Component} from '@angular/core';
import {ViewController, AlertController} from 'ionic-angular';
import template from './temperature-modal.html';

@Component({
    template
})
export class MyModal {

    private temperature: number = 36.6;

    constructor(private viewCtrl: ViewController, private alertCtrl: AlertController) {

    }

    close() {
        this.viewCtrl.dismiss();
    }

    add() {
        if (this.temperature) {
            let confirm = this.alertCtrl.create({
                title: 'Ste si istý?',
                buttons: [
                    {
                        text: 'Áno',
                        handler: () => {
                            this.viewCtrl.dismiss({'temperature': this.temperature});
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
}

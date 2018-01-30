import {Component} from '@angular/core';
import {ViewController, AlertController} from 'ionic-angular';
import template from './pressure-modal.html';

@Component({
    template
})
export class MyModalPressure {
    constructor(private viewCtrl: ViewController, private alertCtrl: AlertController) {

    }

    private diastolic: number = 90;
    private systolic: number = 140;

    close() {
        this.viewCtrl.dismiss();
    }

    add() {
        let confirm = this.alertCtrl.create({
            title: 'Ste si istý?',
            buttons: [
                {
                    text: 'Áno',
                    handler: () => {

                        this.viewCtrl.dismiss({'systolic': this.systolic, 'diastolic': this.diastolic});
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

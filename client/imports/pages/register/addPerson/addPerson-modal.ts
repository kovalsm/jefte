import {Component} from '@angular/core';
import {ViewController, AlertController} from 'ionic-angular';
import template from './addPerson-modal.html';
import { Register } from '../../../../../both/models';

@Component({
    template
})

export class MyModalAddPerson {

    private credential: Register;

    constructor(private viewCtrl: ViewController, private alertCtrl: AlertController) {
        this._resetCredentialsFields();
    }

    _resetCredentialsFields() {
        this.credential = {_id:'',name: '', lastname: '',birth:'',beginningOfStay:'',centrum:'',department:'',room:''};
    }

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
                            this.viewCtrl.dismiss(this.credential);
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
